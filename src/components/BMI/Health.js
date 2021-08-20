import React from "react";
import "./Health.css";
// import  { useState } from 'react';
// import Popup from './components/BMI/Popup';
 
   


class Health extends React.Component {
    render(){
        return(
<div className="life">
<h2>Stay Healthy:Change Your Life</h2>
<div className="healthy_cards">
  <div className="food">
    <a href="#food">
      <img src="food.jpg" alt="Food"></img>
    </a>
    <p>Healthy Eating for Healthy Life</p>
   

  </div>

  <div className="lose_weight">
    <a href="#weight">
      
      <img src="weight.jpg" alt="Weight Lose"></img>
    </a>
    <p>Lose Weight</p>
  </div>
  <div className="activity">
    <a href="#activity">
      <img src="activity.png" alt="Physical Activity"></img>
    </a>
    <p>Physical Activity</p>
  </div>
</div>
</div>
        )
}
}

export default Health;