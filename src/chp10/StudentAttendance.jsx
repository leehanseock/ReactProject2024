import React from 'react';

function StudentAttendance(props) {
    const students = props.students;
    return (
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                    students.map((student) => (
                        <li key={student.id}>
                            {/* 체크박스 추가 */}
                            <input
                                type="checkbox"
                                id={`check-${student.id}`}
                                name={`check-${student.id}`}
                            />
                            <label htmlFor={`check-${student.id}`}>
                                <b>{student.name}</b> - {student.grade}학년, {student.major}과
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default StudentAttendance;