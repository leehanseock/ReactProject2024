import React from "react";

/*const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16,
    },
    messageText : {
        color : "brown",
        fontFamily : "궁서체",
        fontSize : 20,
    },
};*/

class Notification extends React.Component{
    constructor(props) {
        super(props); /*Component가 생성될 때 props를 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.*/
        this.state = {}; /*state 정의*/
    }

    render(){
        return (
            <div className={`wrapper`}>
                <span className={`messageText`}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;