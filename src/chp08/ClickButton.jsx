// 기본적인 클릭 이벤트 처리
// 버튼을 클릭하면 알림창이 표시되도록 하기(alert)
// 함수형 컴퍼넌트로 작업
import {useState} from "react";

function ClickButton() {

    // 첫번째 방법 : 함수 컴포넌트 내에 함수로 정의하는 방법
    function handleClick(){
        alert("버튼을 클릭하였습니다.");
}

    return(
        <button onClick={handleClick}>
            클릭해보세요~
        </button>
    );
}

export default ClickButton;