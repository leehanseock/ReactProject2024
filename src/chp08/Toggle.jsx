import React from "react";
//이벤트 처리 함수에서 상태설정을 위해 사용하는 this를 bind해야만 한다.
//bind하지 않으면 this 부분에서 undefined 에러 발생
class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state={isToggleOn : true}; //isToggleOn이라는 필드의 상태 설정

        this.handleClick = this.handleClick.bind(this);
    }

    //이벤트 발생시 isToggleOne 필드 상태 변경
    handleClick(){
        this.setState(prevState => ({
                isToggleOn : !prevState.isToggleOn //이전 상태(prevState의 반대 = Not prevState
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "신난다" : "안 신난다"}
            </button>
        );
    }
}

export default Toggle;