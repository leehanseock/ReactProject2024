import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chp03/Book.css'
import './chp04/Button.css'
import './chp04/clock.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from "./chp04/ConfirmDialog";
import Clock from './chp04/clock'
import CommentList from './chp05/CommentList'
import NotificationList from "./chp06/NotificationList";
import './chp06/Styles.css'
import Accomodate from "./chp07/Accomodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ClickButton />
    </React.StrictMode>);
// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Accomodate />
//         </React.StrictMode>
//     );
//     }
//     ,1000
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
