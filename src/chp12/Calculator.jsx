import React from 'react';
import {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props){
    const [temperature, SetTemperature]=useState('');

    const handleChange = (event) =>{
        SetTemperature(event.target.value);
    }

    return(
     <fieldset>
         <legend>섭씨 온도를 입력하세요</legend>
         <input
          value = {temperature}
          onChange={handleChange}/>
         <BoilingVerdict
             celsius = {parseFloat(temperature)}/>
     </fieldset>
    )
}

export default Calculator;