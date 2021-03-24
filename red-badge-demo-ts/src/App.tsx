import React from "react";
import { Container } from "reactstrap";
import ClassComponentProps from "./components/ClassComponentProps";
import FunctionalProps from "./components/FunctionalProps";

function App() {
  const numArray = [3, 5, 6, 7, 2, 6, 23, 5, 34];
  return (
    <div>
      <Container>
        <h1>Numbers - Even or Odd</h1>
        <p>
          If the number is even it will be in green, if the number is odd it
          will be in red.
        </p>
      </Container>
      {/* <FunctionalProps numbers={numArray} /> */}
      <ClassComponentProps numbers={numArray}/>
    </div>
  );
}

export default App;
