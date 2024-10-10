import React from "react";

function InputTest() {
    function handleChange(event){
        //event라는 매개변수를 통해 값을 전달받기
        console.log("입력된 값: ", event.target.value)
    }
    //여기서 target은 아래 input 태그

    return(
        <input type = "text" onChange = {handleChange} placeholder="임의의 문자열을 입력해주세요"/>
    );
}

export default InputTest;