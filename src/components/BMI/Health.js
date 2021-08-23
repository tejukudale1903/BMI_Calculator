import React from "react";
import "./Health.css";
import 'font-awesome/css/font-awesome.min.css';
// import  { useState } from 'react';
// import Popup from './components/BMI/Popup';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
   class Health extends React.Component {
    render(){
        return(
            <div className="background2">
              <div className="quotes">
           
              <ul>
                <li>
                There's nothing more important than our good health,that's our principal capital asset.- Arlen Specter
                </li>
                <li>Good health is not something we can buy. However, it can be an extremely valuable savings account.- Anne Wilson Schaef</li>
                <li>Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.– Thich Nhat Hanh</li>
              </ul>
              {/* <h4>There's nothing more important than our good health,that's our principal capital asset.- Arlen Specter</h4>
              <h4>Good health is not something we can buy. However, it can be an extremely valuable savings account.- Anne Wilson Schaef</h4>
              <h4>Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.– Thich Nhat Hanh</h4> */}
              {/* <i class="fas fa-heartbeat"></i> */}
            </div>
            <div className="social_profile">
            <div className="social">
            <div className="linked_in">
              <p>Connect with me</p>
            </div>
            </div>
           
            
            <div className="linked_icon"><a href="https://www.linkedin.com/in/tejashree-kudale-0134ab1a4/" target="_blank" rel="noreferrer"><i class="fa fab fa-linkedin"></i></a></div>
            <div className="twitter_icon"><a href="https://twitter.com/Tejashr20316059" target="_blank" rel="noreferrer"><i class="fa fab fa-twitter-square"></i></a></div>
            <div className="github_icon"><a href="https://github.com/tejukudale1903" target="_blank" rel="noreferrer"><i class="fa fab fa-github"></i></a></div>
       
            </div>
            </div>
        )
}
}

export default Health;