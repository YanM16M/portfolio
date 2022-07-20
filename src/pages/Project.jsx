import React from 'react';
import '../styles/Project.css';
import snake from '../assets/snake.gif';

function Project() {
    return ( 
        <div className="project_container">
            <div className="presentation">
                <h1>Accéder à la page github :</h1>
                <a href="https://github.com/YanM16M" target='_blank'>https://github.com/YanM16M</a>
            </div>
            <div className="snake">
                <h1>Snake</h1>
                <img src={snake} width='512px' height='512px'/>
            </div>
            <div className="react-movies">
                <h1>Social Media</h1>
            </div>
        </div>
     );
}

export default Project;