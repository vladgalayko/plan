import React from 'react';
import { connect } from 'react-redux/es';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import moment from 'moment/moment';




const ProjectDetails = (props) => {
    const {id} = useParams()
    const {projects, auth} = props;
    
    
    if(!auth.uid) return <Navigate to={'/signin'}/>
    
    if (projects) {
        const {title, content, authorFirstName, authorLastName, createdAt} = projects[id];
        return (
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title} - {id}</span>
                    <p>{content}</p>
                </div>
                <div className="card-action grey-ligten-4 grey-text">
                    <div>{authorFirstName} {authorLastName}</div>
                    <div>{moment(createdAt.toDate()).calendar()}</div>
                </div>
            </div>
           </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
};

const mapStatetoProps = (state) => {
    return {
        projects: state.firestore.data.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);