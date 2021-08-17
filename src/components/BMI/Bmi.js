import React from "react";
import "./Bmi.css";

class Bmi extends React.Component {
  
    constructor(){
      super();
  
      this.state = {
        heightFeet: '',
        heightInch: '',
        weight: '',
      }
  
      this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
      this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
      this.handleWeightChange = this.handleWeightChange.bind(this);
      this.calculateBMI = this.calculateBMI.bind(this);
    }
  
    handleHeightFeetChange(event){
      this.setState({
        heightFeet: event.target.value
      });
    }
  
    handleHeightInchChange(event){
      this.setState({
        heightInch: event.target.value
      });
    }  
  
    handleWeightChange(event){
      this.setState({
        weight: event.target.value
      });
    }
  
    calculateBMI(){
      if (this.state.weight && this.state.heightFeet && this.state.heightInch){
        // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
        let INCHES_IN_FEET = 12;
  
        var height = Number(this.state.heightFeet);
            // convert feet to inches
            height *= INCHES_IN_FEET;
            // add the inches input field
            height += Number(this.state.heightInch);
  
        let weight = this.state.weight;
  
        var bmi = (weight / (height * height)) * 703;
            bmi = bmi.toFixed(2);
  
        return bmi;
      }
    }
  
    getBMIResults(bmi){
      let bmiResults = {
        label: '',
        alertClass: '',
      };
      
      if (bmi <= 18.5){
        bmiResults.label = 'Underweight';
        bmiResults.alertClass = 'alert-danger';
      } 
      else if (bmi <= 24.9) {
        bmiResults.label = 'Normal weight';
        bmiResults.alertClass = 'alert-success';
      }
      else if (bmi <= 29.9){
        bmiResults.label = 'Overweight';
        bmiResults.alertClass = 'alert-warning';
      }
      else if (bmi >= 30) {
        bmiResults.label = 'Obesity';
        bmiResults.alertClass = 'alert-danger';
      } else {
        bmiResults.label = 'BMI';
        bmiResults.alertClass = 'alert-primary';
      }
  
      return bmiResults;
    }
  
    render() {
  
      let bmi = this.calculateBMI();
      let results = this.getBMIResults(bmi);
  
      return (
        <div className="App_container">
          <div className="row">
            <div className="col-xs-12">
              <p>BMI Calculator</p>
              <h4>Enter your weight and height below.</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  
                  <div className="row">
                    <div className="col-xs-12">
                    <label className="control-label" htmlFor="bmiWeight">Weight : </label>
                      <input className="form-control" id="bmiWeight" type="number" min="1" max="1000" value={ this.state.weight } onChange={ this.handleWeightChange } />
                      <label className="control-label" htmlFor="bmiWeight"> pound</label>
                    </div>
                  </div>
                </div>
  
                <div className="form-group">
                  
                  <div className="row">
                    {/* <div className="col-xs-6"> */}
                    <label className="control-label" htmlFor="bmiHeightFeet">Height : </label>
                      <input className="form-control" id="bmiHeightFeet" type="number" min="1" max="12" value={ this.state.heightFeet } onChange={ this.handleHeightFeetChange } />
                      <label className="control-label" htmlFor="bmiHeightFeet"> ft </label>
                    {/* </div> */}
                    {/* <div className="col-xs-6"> */}
                      <input className="form-control" id="bmiHeightInch" type="number" min="0" max="12" value={ this.state.heightInch } onChange={ this.handleHeightInchChange } />
                      <label className="control-label" htmlFor="bmiHeightInch"> in</label>
                    {/* </div> */}
                  </div>
                </div>
              </form>
            </div>
  
            <div className="col-sm-6">
              <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
            </div>
           
         <div className="tips">
           <h3>Are you Underweight....??</h3>
           <p>Just like obesity causes health concerns, having less weight than the normal also poses health issues. 
             Being underweight can be result of poor nutrition and should be a matter of concern. If the body does not receive adequate 
             amounts of nutrients, the body fails to function to its utmost. This could result in the imbalance
              in the metabolism. Inculcating a healthy diet for underweight will provide the necessary nutrients for better functioning of the body.</p>
           <h4>These are quick health tips for the person suffering from underweight should include this in your diet plan:</h4>
          
           <div className="underweight">
           <ol>
             <li>Heavy food items that are more in calories.</li>
             <li>Frequent consumption of food items which are rich in nutrients, it could be snacks, shakes or juices, or proper meals.</li>
             <li>Adding extra ingredients that are high in calories to regular diet, for example, 
               including eggs and bananas in morning breakfast, etc., can help in increasing the weight.</li>
               <li>Consume protein supplements along with adequate amount of vegetables and fruits.</li>
               <li>Eating calorie dense food and maintaining a balanced diet will help in gaining the weight.</li>
               <li>However, the diet shouldn’t be started drastically and instead, should be implemented gradually so that the body is accustomed with it.</li>
           </ol>
           </div>
         </div>
         <div className="tips">
         <h3>Are you Overweight/Obese....??</h3>
         <p>When fat inside the body accumulates in an excess proportion such that it leads to negative health effects, 
           the condition is called obesity.When BMI is between 25- 30kg/sq.m, and over it, then the person is termed overweight or obese.
           It is more common in women than in men and children who tend to be obese, grow as obese adults. Obese individuals, in 
           contrast to their non-obese counterparts, have leptin resistance, a protein hormone expressed by adipocytes (fat cells) 
           that have a great impact on weight maintenance.</p>
           <h4>These are some causes of Obesity :</h4>
           <div className="overweight">
             <ol>
               <li>Breathlessness</li>
               <li>Increased sweating</li>
               <li>Back and joint pains</li>
               <li>Low confidence and self-esteem</li>
               <li>Inability to cope with sudden physical activity</li>
               <li>Feeling isolated</li>
             </ol>
             <h4>How to lose weight ? :</h4>
            <ul>
              <li>Exercise: Burn calories and maintain weight loss with daily workouts, cycling, swimming, etc.</li>
              <li>Reduce Calorie Intake: A diet is recommended that reduces ≥500 kcal/d [usually 1200 to 1500 kcal/d for women
                 and 1500 to 1800 kcal/d for men]</li>
            </ul>
            <h4>Do's :</h4>
            <ul>
              <li>Decrease salt intake (less than 6g/d)</li>
              <li>Add protein to the diet, eat legumes, whole grains, nuts, seafood, and lean meats</li>
              <li>Eat fat-free and low-fat dairy</li>
              <li>Consume more fruits and vegetables</li>
            </ul>
            <h4>Don'ts :</h4>
            <ul>
              <li>Avoid foods with more than 2 gm of saturated fat</li>
              <li>	Avoid junk food</li>
              <li>Avoid sugary drinks</li>
              <li>Limit food rich in saturated fat and cholesterol</li>
            </ul>
           </div>
           
         </div>
          </div>
        </div>
      );
    }
  }
  function BmiDisplay(props){
    return (
      <div className={"bmi-result alert " + props.alertClass}>
        <div>{ props.bmi || '___________' }</div>
        <div>{ props.label }</div>
      </div> 
    )
  }

  
// export default Bmi;





export default Bmi;