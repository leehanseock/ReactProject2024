import React from 'react';

function Numberlist(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

function AppNumberlist(){
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    return(
        <div>
            <h1>숫자 리스트</h1>
            <Numberlist numbers={numbers}/>
        </div>
    );
}

export default AppNumberlist;