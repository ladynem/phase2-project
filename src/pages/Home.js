import React, {useEffect, useState} from "react"
import Nav from "../components/Nav"
import Form from "../components/Form"
import OutOfClass from "../components/OutOfClass"

function Home() {
  const [outStudents, setOutStudents] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/outOfClass")
       .then(res => res.json())
       .then(data => setOutStudents(data))
    }, [outStudents])

  const newOutStudents = (newOutStudent) => {
    setOutStudents([...outStudents, newOutStudent])
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Form newOutStudents={newOutStudents}/>
      <OutOfClass outStudents={outStudents} />
    </div>
  );
}

export default Home;