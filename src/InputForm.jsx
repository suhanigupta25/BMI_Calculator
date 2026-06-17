import React, { useState } from 'react';
import './style.css';

function InputForm(props){
    return (
        <div className="input-form">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={props.name} onChange={(e) => props.setName(e.target.value)} />

                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" value={props.weight} onChange={(e) => props.setWeight(e.target.value)} />

                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" name="height" value={props.height} onChange={(e) => props.setHeight(e.target.value)} />
            </form>
        </div>
    )
}
export default InputForm;