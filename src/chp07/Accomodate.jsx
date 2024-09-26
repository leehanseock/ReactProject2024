import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    //컴포넌트가 생성(Mount) 되었을 때, 컴포넌트 내 상태가 변경(Update) 되었을 때
    useEffect(()=>{
        console.log("========================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    })

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    },[count]);

    return (
        <div style = {{ padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                수용시설에 입장
            </button>
            <button onClick={decreaseCount}>수용시설에서 퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );

}

export default Accomodate;