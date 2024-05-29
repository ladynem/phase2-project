import React from "react";

function Form() {
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
            value={null} 
            onChange={null}
        />
        <br /><br /> 
        {/* How do I do this in CSS instead? */}
        <select>
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

export default Form;
