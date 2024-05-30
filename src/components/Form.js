import React, {useState} from "react"

function Form({ updateOutStudents }) {
    const [formName, setFormName] = useState("")
    const [formLocation, setFormLocation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch("http://localhost:3000/outOfClass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: formName,
                location: formLocation
            })
        })
       .then(res => res.json())
       .then(data => updateOutStudents(data) ) 

        setFormName("")
        setFormLocation("")
    }
    
  return (
    <div>
        <h3>Sign Out of Class:</h3>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Student Name"
            name="studentName"
            value={formName} 
            onChange={(e) => setFormName(e.target.value)}
        />
        <br /><br /> 
        {/* How do I create breaks in CSS instead? Is this best practice? */}
        <select value={formLocation} onChange={(e) => setFormLocation(e.target.value)}>
            <option value="">Choose One Location</option>
            <option value="Restroom">Restroom</option>
            <option value="Counselor">Counselor</option>
            <option value="Assistant Principal">Assistant Principal</option>
            <option value="Nurse">Nurse</option>
            <option value="Other">Other</option>
        </select>
        <br /><br />
        <button>Submit to Leave Class</button>
    </form>
</div>
  )
}

export default Form
