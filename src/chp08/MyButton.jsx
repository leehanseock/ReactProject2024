import React from "react";
//클래스 필드 문법 사용하여 bind하는 문장을 작성하지 않는 방법
class MyButton extends React.Component{
    //생성자
    constructor(props) {
        super(props);

        this.state={isToggleOn : true}; //isToggleOn이라는 필드의 상태 설정
    }

    //이벤트 발생시 isToggleOne 필드 상태 변경
    handleClick(){
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn //이전 상태(prevState의 반대 = Not prevState
        }));
    }

    render(){
        return(//아래처럼 애로우 함수를 이용하면 바인드를 안해줘도 된다
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? "좋아한다" : "안 좋아한다"}
            </button>
        );
    }
}

export default MyButton;