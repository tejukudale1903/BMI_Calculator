import "./App.css";
// import BMI from "./components/BMI/Bmi";
import Health from "./components/BMI/Health";
import React, { useState } from "react";
import Popup from "./components/BMI/Popup";
import BMI from "./components/BMI/Bmi";
// import Health from "./components/BMI/Health";
// import  useRef from "react";
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
            <div className="weight_lose">
              <a href="#weight" onClick={() => setButtonPopup2(true)}>
                <img src="lose_weight.png" alt="Weight Lose"></img>
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
        <div className="weight_loss">
          <h2>Tips for successful weight loss</h2>
          <div className="weight_tips">
            <h3>1. Eat varied, colorful, nutritionally dense foods</h3>
            <p>
              The following foods are healthful and often rich in nutrients:
            </p>
            <ul>
              <li>fresh fruits and vegetables</li>
              <li>whole grains, such as brown rice and oatmeal</li>
              <li>legumes</li>
              <li>fish</li>
              <li>seeds</li>
              <li>nuts</li>
            </ul>
            <p>Foods to avoid eating include:</p>
            <ul>
              <li>fatty red or processed meats</li>
              <li>foods with added oils, butter, and sugar</li>
              <li>bagels</li>
              <li>baked goods</li>
              <li>white bread</li>
              <li>processed foods</li>
            </ul>
            <h3>2. Keep a food and weight diary</h3>
            <p>
              Self-monitoring is a critical factor in successfully losing
              weight. People can use a paper diary, mobile app, or dedicated
              website to record every item of food that they consume each day.
              They can also measure their progress by recording their weight on
              a weekly basis.
            </p>

            <p>
              Those who can track their success in small increments and identify
              physical changes are much more likely to stick to a weight loss
              regimen.
            </p>

            <p>
              People can also keep track of their body mass index (BMI) using a
              BMI calculator.
            </p>
            <h3>3.Eliminate liquid calories</h3>
            <p>
              It is possible to consume hundreds of calories a day by drinking
              sugar-sweetened soda, tea, juice, or alcohol. These are known as
              “empty calories” because they provide extra energy content without
              offering any nutritional benefits.
            </p>

            <p>
              Unless a person is consuming a smoothie to replace a meal, they
              should aim to stick to water or unsweetened tea and coffee. Adding
              a splash of fresh lemon or orange to water can provide flavor.
            </p>

            <p>
              Avoid mistaking dehydration for hunger. An individual can often
              satisfy feelings of hunger between scheduled meal times with a
              drink of water.
            </p>
          </div>
        </div>
      </Popup>

      <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
        <div className="phy_activity">
          <h2>Physical Activity:Obesity Prevention Source</h2>
          <div className="physical_act">
            <p>
              Regular exercise is vital for both physical and mental health.
              Increasing the frequency of physical activity in a disciplined and
              purposeful way is often crucial for successful weight loss.
            </p>
            <p>
              People who are not usually physically active should slowly
              increase the amount of exercise that they do and gradually
              increase its intensity. This approach is the most sustainable way
              to ensure that regular exercise becomes a part of their lifestyle.
            </p>
            <p>
              In the same way that recording meals can psychologically help with
              weight loss, people may also benefit from keeping track of their
              physical activity. Many free mobile apps are available that track
              a person’s calorie balance after they log their food intake and
              exercise.
            </p>
            <h3>
              If the thought of a full workout seems intimidating to someone who
              is new to exercise, they can begin by doing the following
              activities to increase their exercise levels:
            </h3>
            <ul>
              <li>parking farther away from a building entrance</li>
              <li>playing outdoor games</li>
              <li>dancing</li>
              <li>gardening</li>
              <li>taking the stairs</li>
              <li>raking leaves</li>
              <li>walking</li>
            </ul>
            <h3>Physical activity also helps to–</h3>
            <ul>
              <li>Maintain weight.</li>
              <li>Reduce risk for osteoporosis and falls.</li>
              <li>
                Reduce risk for type 2 diabetes, heart attack, stroke, and
                several forms of cancer.
              </li>
              <li>Reduce high blood pressure.</li>
              <li>Reduce arthritis pain and associated disability.</li>
              <li>Reduce symptoms of depression and anxiety.</li>
            </ul>
          </div>
        </div>
      </Popup>
      <Health />
    </div>
  );
}

export default App;
