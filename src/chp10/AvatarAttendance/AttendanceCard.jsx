import React from 'react';
import './AttendanceCard2.css';
import img1 from './imgs/1.jpg'
import img7 from './imgs/7.png'

const students1 = [
    {id:1, name: "최주진", grade : 1, major : "컴퓨터공학", avatar : "https://tinypic.host/images/2024/11/14/-2024-11-14-154859.png"},
    {id:2, name: "마현빈", grade : 1, major : "일본문화학", avatar : "https://tinypic.host/images/2024/11/14/-2024-11-14-155324.png"},
    {id:3, name: "이하준", grade : 2, major : "문헌정보학", avatar : "https://tinypic.host/images/2024/11/14/news_907360_1711496457_m.jpg"},
    {id:4, name: "김초원", grade : 2, major : "바이오메카트로닉스", avatar : img1},
    {id:5, name: "이한석", grade : 3, major : "신소재공학", avatar : "https://tinypic.host/images/2024/11/14/patrick-patrick-star.gif"},
    {id:6, name: "스폰지밥", grade : 4, major : "식품생명공학", avatar : "https://tinypic.host/images/2024/11/14/Spongebob.png"},
    {id:7, name: "징징이", grade : 4, major : "프랑스어문학", avatar : img7},
    {id:8, name: "집게사장", grade : 4, major : "경제학", avatar : "https://tinypic.host/images/2024/11/14/Mr.Krabs_.png"},
    {id:9, name: "다람이", grade : 4, major : "나노공학", avatar : "https://tinypic.host/images/2024/11/14/Sandy.png"}
];

function AttendanceCard(){
return(
    <div className="attendance-container">
        <h2 className="attendance-title">학생 사진출석부</h2>
        <div className = "card-container">
            {
                students1.map((student)=>(
                    <div className="student-card">
                        <img src={student.avatar} alt={student.name} className="student-avatar"/>
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}과</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);
}

export default AttendanceCard;