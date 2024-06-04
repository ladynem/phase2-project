import React from "react"

function OutOfClass({ outStudents, setOutStudents }) {

    const outStudentsList = outStudents.map((outStudent) => {
        return (
            <li key={outStudent.id}>{outStudent.name}, Location: {outStudent.location}
                <button onClick={() => handleClick(outStudent.id)}>
                    I'm Back!
                </button>
            </li>
        )
    })

    const handleClick = (id) => {
        fetch(`http://localhost:3000/outOfClass/${id}`, {
          method: "DELETE"
        })
        .then((data) => {
            const updatedStudents = outStudents.filter((student) => student.id !== id)
            setOutStudents(updatedStudents)
        })
    }

    return (
    <div>
        <h3>Student(s) Out of Class:</h3>
        {outStudentsList}
    </div>
  );
}

export default OutOfClass
