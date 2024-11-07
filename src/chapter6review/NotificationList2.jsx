import React from "react";
import Notification2 from "./Notification2";

const reservedNotifications2 = [
    {
        id:1,
        message : "‍🌑🌒🌓🌔🌝🌖🌗🌘",
    },
    {
        id:2,
        message: "🧜‍♂🧚‍♀️🧙‍♂️🧛‍♀️🧝🧏‍♂️️"
    },
    {
        id:3,
        message: "🗽🕋🏙️🛕🏨🗾🌉🌃🌆🌅🌄🌇🛼🚄🚂🪂🛰️🛸🚀🚢🌋⛄",
    },
];

var timer;

class NotificationList2 extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            notifications2 : [],
        };
    }

    componentDidMount() {
        const { notifications2 } = this.state;
        timer = setInterval(()=> { /*handler : timeout에 지정된 시간이 경과시 수행될 문장*/
            if (notifications2.length < reservedNotifications2.length){
                const index = notifications2.length;
                notifications2.push(reservedNotifications2[index]);
                this.setState({
                    notifications2: notifications2,
                });
            } else {
                this.setState({
                    notifications2: [],
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
                {this.state.notifications2.map((notifications2)=>{
                    return <Notification2
                        key = {notifications2.id}//id를 쓸거면 key값을 같이 설정해주어야만 에러가 안난다
                        id = {notifications2.id}
                        message = {notifications2.message} />;
                })}
            </div>
        );
    }
}
export default NotificationList2;