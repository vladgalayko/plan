import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const params = useParams()
    return (
       <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {params.id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas in eaque debitis animi doloribus pariatur dicta, mollitia earum reprehenderit natus architecto nisi neque dolorum voluptatem dolores asperiores quod sint.</p>
            </div>
            <div className="card-action grey-ligten-4 grey-text">
                <div>Posted by The Net Ninja</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
       </div>
    );
};

export default ProjectDetails;