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
        <div className="App container">
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
            <div className="list"> 
            <h3>    KeyPoints</h3>
          <ul>
                <li>Maintaining a healthy weight is important for your heart health.</li>
                <li>Moving more can lower your risk factors for heart disease.</li>
                <li>Eating a healthy diet is the key to heart disease prevention.</li>
                <li>Tracking your heart health stats can help you meet your heart health goals.</li>
                </ul>
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