import React from 'react';
import {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

// 화씨를 섭씨로 변경해서 반환하는 함수
function toCelsius(fahrenheit){
    return (fahrenheit-32) * 5 / 9;
}

//섭씨온도를 화씨로 변경해서 반환하는 메소드
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();

}

function Calculator3(props){
    const [temperatrue, setTemperature]= useState("");
    const [scale, setScale] = useState('c');
    const handleCelsiusChange=(temperature)=>{
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheitChange=(temperature)=>{
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperatrue, toCelsius): temperatrue;
    const fahrenheit = scale === "c" ? tryConvert(temperatrue, toFahrenheit): temperatrue;

    return(
        <div>
            <TemperatureInput scale='c' temperature = {celsius} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale='s' temperature = {fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius = {parseFloat(celsius)}/>
        </div>
    )
}

export default Calculator3;