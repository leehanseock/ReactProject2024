import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message : "안녕하세요, 오늘 일정을 알려드립니다.👩‍🌾",
    },
    {
        message: "오후에는 웹프로그래밍활용 수업이 있습니다.🧜‍♂️"
    },
    {
        message: "이제 곧 수업이 시작됩니다.🗽",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            notifications : [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=> { /*handler : timeout에 지정된 시간이 경과시 수행될 문장*/
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);/*타이머 중지*/
            }
        },1000);
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message = {notification.message} />;
                })}
            </div>
        );
    }
}
export default NotificationList;