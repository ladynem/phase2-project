import React from "react"
import Header from "./Header"
import Nav from "./Nav"
import Form from "./Form"
import About from "./About"
import StudentSummary from "./StudentSummary"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <StudentSummary />
      {/* <Form /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
