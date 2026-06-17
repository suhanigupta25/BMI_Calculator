
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
        <div>
            <h1>Result</h1>
            <h2>HI {props.name}!</h2>

            <p>Your BMI is: {props.bmiResult}</p>
            <p>You are in the category: {props.bmiCategory}</p>
        </div>

        <div>
            <div className="bar-container">
                <div
                    className="result-bar"
                    style={{
                        backgroundColor: barStyle.color,
                        width: barStyle.width
                    }}
                ></div>
            </div>

            <span>Underweight</span>
            <span style={{ marginLeft: '20px' }}>Normal</span>
            <span style={{ marginLeft: '20px' }}>Overweight</span>
            <span style={{ marginLeft: '20px' }}>Obese</span>
        </div>
    </div>
);
}
export default ResultCard;