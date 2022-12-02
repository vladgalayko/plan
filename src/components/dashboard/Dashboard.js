import React from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useContext } from 'react';
import { Context } from '../..';


const Dashboard = () => {
    const {auth, firestore} = useContext(Context)
    const [projects, loading] = useCollectionData(
        firestore.collection('projects')
    )
    console.log(projects)

    return (
        <div className="dashboard container"> 
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;