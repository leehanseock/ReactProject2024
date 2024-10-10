import React from "react";

class ConfirmButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            //상태변수와 상태변수 초깃값 설정
            isConfirmed : false
        };

        //bind
        this.handleConfirm = this.handleConfirm.bind(this)

    }
    //bind할 함수 먼저 정의
    handleConfirm(){
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

export default ConfirmButton;