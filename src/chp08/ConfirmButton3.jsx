import React from "react";
import {useState} from "react";

function ConfirmButton3(props) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //상태변수와 상태변수 초깃값 설정
    //         isConfirmed : false
    //     };
    //
    //
    // } 함수 컴포넌트니까 constructor 필요없음

    //상태변수와 상태변수값을 변경할 메소드 지정, 오른쪽 항에는 상태변수 디폴트값(여기선 'fault') 지정
    const[isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm(){
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }


    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            ConfirmButton3 {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton3;