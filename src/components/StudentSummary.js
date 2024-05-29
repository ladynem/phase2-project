import React, {useEffect, useState} from "react";
import Search from "./Search";

function StudentSummary() {
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/students")
       .then(res => res.json())
       .then(data => setStudents(data))
    }, [])

    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))
    
    const studentList = filteredStudents.map(student => {
        return (
        <li key={student.id}> {student.name} (#{student.studentId})
            <div>Total Hall Time: {student.timeOutOfClass} minutes</div>
        </li>
        )
    })

    return (
    <div>
        <Search search={search} setSearch={setSearch}/>
        {studentList}
    </div>
    )
}

export default StudentSummary;

// alphabetize filter
// search by ID number
// click to expand and view full report
// include auto-generated chart in report
// print or email report
