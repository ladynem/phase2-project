import React from "react"

function OutOfClass({ outStudents }) {

    const handleBackClick = (e) => {
        console.log(e.target)
        //target is <button>
    }

    const outStudentsList = outStudents.map((outStudent) => {
        return (
            <li key={outStudent.id}>
                {outStudent.name}, Location: {outStudent.location} 
                <button onClick={handleBackClick}>
                    I'm Back!
                </button>
            </li>
        )
    })
    
    return (
    <div>
        <h3>Student(s) Out of Class:</h3>
        {outStudentsList}
    </div>
  );
}

export default OutOfClass
