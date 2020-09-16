import React from "react";
import Timer from "./Timer";
import StepSelector from "./StepSelector";

const stepOptions = [1, 5, 10, 15, 20, 25, 30];

function App() {
  return (
    <div>
      <Timer />
      <StepSelector options={stepOptions} />
    </div>
  );
}

export default App;
