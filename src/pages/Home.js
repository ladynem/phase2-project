import React from "react"
import Nav from "../components/Nav"
import Form from "../components/Form"
import OutOfClass from "../components/OutOfClass"

function Home() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Form />
      <OutOfClass />
    </div>
  );
}

export default Home;
