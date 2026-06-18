import React, { useState } from 'react';
import InputForm from './InputForm';
import ResultCard from './ResultCard';
import './style.css';

function App(){
  const [name,setName] = useState("");
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");

  const [bmiResult,setbmiResult] = useState(null);
  const [bmiCategory,setbmiCategory] = useState(null);

  let calculateBMI = function(){ 
    let h=parseFloat(height)/100;
    let w=parseFloat(weight);
    console.log(h);
    console.log(w);

    let bmi=w/(h*h);
    bmi=bmi.toFixed(2); //round off

    setbmiResult(bmi);
    if(bmi<18.5){
      setbmiCategory("Underweight");
    } else if(bmi>=18.5 && bmi<25){
      setbmiCategory("Normal");
    } else if(bmi>=25 && bmi<30){
      setbmiCategory("Overweight");
    } else {
      setbmiCategory("Obese");
    }

    console.log(bmi);
  }

  return (
    <div>
      <h1>BMI CALCULATOR</h1>
      <InputForm name={name} weight={weight} height={height} setName={setName} setWeight={setWeight} setHeight={setHeight}/>
      <button onClick={calculateBMI} >Calculate BMI</button>     
      <ResultCard name={name} bmiResult={bmiResult} bmiCategory={bmiCategory}/>
    </div>

  )
}

export default App;
