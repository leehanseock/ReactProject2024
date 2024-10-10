//상태 변경을 포함한 이벤트 처리
import React, {useState} from "react";

function Counter(){
    //상태 설정
    const[count, setCount] = useState(0)
    //상태 변경할 상태변수와 상태변경 메소드를 대괄호에

    function handleCount(){
        setCount(prevState => prevState + 1);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={handleCount}>1씩 증가</button>
        </div>
    );
}

export default Counter;