import React, {useState} from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count)=> Math.max(count-1, 0));
    //0까지만 카운트되도록 두번째 매개변수로 0 넣어주기

    return [count, increaseCount, decreaseCount];

}

export default useCounter;