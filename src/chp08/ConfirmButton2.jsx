import React from "react";
import {useState} from "react";
//애로우 함수 사용

class ConfirmButton2 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            //상태변수와 상태변수 초깃값 설정
            isConfirmed : false
        };


    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                ConfirmButton {this.state.isConfirmed ? "확인됨":"확인하기"}
            </button>
        );
    }
}

export default ConfirmButton2;