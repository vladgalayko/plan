import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import { rootReducer } from './components/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from 'react';
import { getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase'
import { compose } from 'redux';


firebase.initializeApp ({
  apiKey: "AIzaSyDyfKR2_BciwiZ7VZWlHKcJekZ8V__kXAY",
  authDomain: "mario-plan-e4c76.firebaseapp.com",
  projectId: "mario-plan-e4c76",
  storageBucket: "mario-plan-e4c76.appspot.com",
  messagingSenderId: "1060111527374",
  appId: "1:1060111527374:web:1fb6ac66d479d37b778f9f",
  measurementId: "G-B7K8T4EDH5"
});

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null);

const store = legacy_createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase)
  ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider> 
  </React.StrictMode>
);
