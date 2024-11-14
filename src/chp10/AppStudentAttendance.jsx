import React from 'react';
import StudentAttendance from "./StudentAttendance";

const students1 = [
    {id:1, name: "최주진", grade : 1, major : "컴퓨터공학"},
    {id:2, name: "마현빈", grade : 1, major : "일본문화학"},
    {id:3, name: "이하준", grade : 2, major : "문헌정보학"},
    {id:4, name: "김초원", grade : 2, major : "바이오메카트로닉스"},
    {id:5, name: "이한석", grade : 3, major : "신소재공학"}
];
const students2 = [
    {id:1, name: "최주진", grade : 1, major : "중어중문학"},
    {id:2, name: "마현빈", grade : 1, major : "동양철학"},
    {id:3, name: "이하준", grade : 2, major : "미디어커뮤니케이션"},
    {id:4, name: "김초원", grade : 2, major : "수학"},
    {id:5, name: "이한석", grade : 3, major : "기계공학"}
];
function AppStudentAttendance(){
    return(
      <div>
          <StudentAttendance students = {students1}/>
          <hr/>
          <StudentAttendance students = {students2}/>
      </div>
    );
}

export default AppStudentAttendance;