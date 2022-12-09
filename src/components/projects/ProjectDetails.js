import React from 'react';
import { connect } from 'react-redux/es';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';


const ProjectDetails = (props) => {
    const {id} = useParams()
    const {projects} = props;
    
    
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
                    <div>2nd September, 2am</div>
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
        projects: state.firestore.data.projects
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);