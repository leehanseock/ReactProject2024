import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        message : "안녕하세요, 오늘 일정을 알려드립니다.‍🌑🌒🌓🌔🌝🌖🌗🌘",
    },
    {
        id:2,
        message: "오후에는 웹프로그래밍활용 수업이 있습니다.🧜‍♂🧚‍♀️🧙‍♂️🧛‍♀️🧝🧏‍♂️️"
    },
    {
        id:3,
        message: "이제 곧 수업이 시작됩니다.🗽🕋🏙️🛕🏨🗾🌉🌃🌆🌅🌄🌇🛼🚄🚂🪂🛰️🛸🚀🚢🌋⛄",
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
                this.setState({
                   notifications: [],
                });
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
                    return <Notification
                        key = {notification.id}//id를 쓸거면 key값을 같이 설정해주어야만 에러가 안난다
                        id = {notification.id}
                        message = {notification.message} />;
                })}
            </div>
        );
    }
}
export default NotificationList;