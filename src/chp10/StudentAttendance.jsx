import React from 'react';

const students = [
    {id:1, name: "최주진", grade : 1, major : "컴퓨터공학"},
    {id:2, name: "마현빈", grade : 1, major : "한국철학"},
    {id:3, name: "이하준", grade : 2, major : "문헌정보학"},
    {id:4, name: "김초원", grade : 2, major : "바이오메카트로닉스"},
    {id:5, name: "이한석", grade : 3, major : "신소재공학"}
];

function StudentAttendance(){
    return (
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                    students.map((student)=>(
                        <li key={student.id}>
                            <b>{student.name}</b> - {student.grade}학년, {student.major}과
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default StudentAttendance;