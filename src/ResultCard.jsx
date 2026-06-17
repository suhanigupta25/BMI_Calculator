
import React, { useState } from 'react';
import './style.css';

function ResultCard(props){
    const bmiStyles = {
    Underweight: { color: "skyblue", width: "25%" },
    Normal: { color: "lightgreen", width: "50%" },
    Overweight: { color: "orange", width: "75%" },
    Obese: { color: "red", width: "100%" }
    };
    const barStyle = bmiStyles[props.bmiCategory] || { color: "gray", width: "0%" };  
    
return (
    <div>
        <div className="result-card">
            <h1>Result</h1>
            <h2>HI {props.name}!</h2>

            <p className="bmi-value">Your BMI is: {props.bmiResult}</p>
            <p className="bmi-category">You are in the category: {props.bmiCategory}</p>
        </div>

        <div className="bar-container">
                <div
                    className="result-bar"
                    style={{
                        backgroundColor: barStyle.color,
                    }}
                ></div>
            </div>

            <div className="bar-labels">
                <span>Underweight</span>
                <span>Normal</span>
                <span style={{ marginLeft: '20px' }}>Overweight</span>
                <span style={{ marginLeft: '20px' }}>Obese</span>
            </div>
        </div>
);
}
export default ResultCard;