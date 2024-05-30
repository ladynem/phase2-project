import React, {useEffect, useState} from "react"
import Search from "../components/Search"
import Nav from "../components/Nav"

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
        <header>
            <Nav />
        </header>
        <Search search={search} setSearch={setSearch}/>
        {studentList}
    </div>
    )
}

export default StudentSummary