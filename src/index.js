import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './chp03/Book.css'
// import './chp04/Button.css'
// import './chp04/clock.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from "./chp04/ConfirmDialog";
import Clock from './chp04/clock'
import CommentList from './chp05/CommentList'
import NotificationList from "./chp06/NotificationList";
// import './chp06/Styles.css'
import Accomodate from "./chp07/Accomodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import CommentList2 from "./chapter5review/CommentList2";
import NotificationList2 from "./chapter6review/NotificationList2";
//import Greeting from "./chp09/Greeting";
import LoginControl from "./chp09/LoginControl";
import Greeting from "./test/Greeting"
import MailBox from "./chp09/MailBox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";
import AppNumberlist from "./chp10/AppNumberlist";
import StudentAttendance from "./chp10/StudentAttendance";
import AppStudentAttendance from "./chp10/AppStudentAttendance";
import AttendanceCard from "./chp10/AvatarAttendance/AttendanceCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
     <React.StrictMode>
         <AttendanceCard/>
     </React.StrictMode>
 );
// setInterval(()=> {
//     root.render(
//     <React.StrictMode>
//         <Clock2 />
//     </React.StrictMode>)
//     }, 1000);


reportWebVitals();
