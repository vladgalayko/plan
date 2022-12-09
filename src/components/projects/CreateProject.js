import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import {createProject} from '../store/actions/projectActions'
import { Navigate } from 'react-router-dom';

const CreateProject = () => {

    const title = useInput('');
    const content = useInput('');
    const auth = useSelector(state => state.firebase.auth);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const project = {
            title: title.value,
            content: content.value
        }
        // console.log(project)
        dispatch(createProject(project))
    }

    if(!auth.uid) return <Navigate to={'/signin'}/>

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create new Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input {...title} type="text" id='title' />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" {...content} className="materialize-textarea"></textarea>
                </div>
                <div className="input-field">
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;