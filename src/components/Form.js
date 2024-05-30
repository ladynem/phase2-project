import React, {useState} from "react"

function Form() {
    const [formId, setformId] = useState("")
    const [formType, setFormType] = useState("")
    
  return (
    <div>
        <h3>Enter Your Information</h3>
        <form>
        <input 
            type="number" 
            placeholder="Student ID"
            name="studentId"
            // min="7"
            // max="7"
            value={formId} 
            onChange={(e) => setformId(e.target.value)}
        />
        <br /><br /> 
        {/* How do I do this break in CSS instead? */}
        <select onChange={(e) => setFormType(e.target.value)}>
            <option value="">Choose One</option>
            <option value="Restroom">Restroom</option>
            <option value="Counselor">Counselor</option>
            <option value="Assistant Principal">Assistant Principal</option>
            <option value="Nurse">Nurse</option>
            <option value="Other">Other</option>
        </select>
        <br /><br /> 
        <button>Submit</button>
    </form>
</div>
  )
}

export default Form
