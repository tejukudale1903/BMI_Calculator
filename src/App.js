import "./App.css";
// import BMI from "./components/BMI/Bmi";
// import Health from "./components/BMI/Health";
import React, { useState } from "react";
import Popup from "./components/BMI/Popup";
import BMI from "./components/BMI/Bmi";
// import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//      <BMI /> <Popup />
//     </div>

//   );
// }

function App() {
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  return (
    <div className="App ">
      <BMI />
      <main>
        <div className="life">
          <h2>Stay Healthy:Change Your Life</h2>
          <div className="healthy_cards">
            <div className="food">
              <a href="#food" onClick={() => setButtonPopup1(true)}>
                <img src="food.jpg" alt="Food"></img>
              </a>
              <p>Healthy Eating for Healthy Life</p>
            </div>
            <div className="weight">
              <a href="#weight" onClick={() => setButtonPopup2(true)}>
                <img src="weight.jpg" alt="Weight Lose"></img>
              </a>
              <p>Lose Weight</p>
            </div>

            <div className="activity">
              <a href="#activity" onClick={() => setButtonPopup3(true)}>
                <img src="activity.png" alt="Physical Activity"></img>
              </a>
              <p>Physical Activity</p>
            </div>
          </div>
        </div>
      </main>
      <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        {/* <h2>Healthy Eating Plan</h2> */}
        <div className="health_tips">
          <h2>Healthy Eating Plan</h2>
          <ul>
            <li>
              Include a variety of protein foods such as seafood, lean meats and
              poultry, eggs, legumes (beans and peas), soy products, nuts, and
              seeds.
            </li>
            <li>
              Emphasizes fruits, vegetables, whole grains, and fat-free or
              low-fat milk and milk products
            </li>
            <li>Stays within your daily calorie needs.</li>
            <li>
              Include food which are low in saturated fats, trans fats,
              cholesterol, salt (sodium), and added sugars.
            </li>
          </ul>
        </div>
        <div className="fruit">
          <h2>Fruit</h2>
          <p>
            Fresh, frozen, or canned fruits are great choices. Try fruits beyond
            apples and bananas such as mango, pineapple or kiwi fruit. When
            fresh fruit is not in season, try a frozen, canned, or dried
            variety. Be aware that dried and canned fruit may contain added
            sugars or syrups. Choose canned varieties of fruit packed in water
            or in its own juice.
          </p>
        </div>

        <div className="calcium">
          <h2>Calcium reach foods</h2>
          <p>
            In addition to fat-free and low-fat milk, consider low-fat and
            fat-free yogurts without added sugars. These come in a variety of
            flavors and can be a great dessert substitute.
          </p>
        </div>

        <div className="meats">
          <h2>Meats</h2>
          <p>
            If your favorite recipe calls for frying fish or breaded chicken,
            try healthier variations by baking or grilling. Maybe even try dry
            beans in place of meats. Ask friends and search the internet and
            magazines for recipes with fewer calories ― you might be surprised
            to find you have a new favorite dish!.
          </p>
        </div>
      </Popup>

      <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <p>lose weight</p>
      </Popup>

      <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
        <p>Activity</p>
      </Popup>
    </div>
  );
}
export default App;
