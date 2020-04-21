import React from "react";
import Intro from "./components/Intro";
import Step from "./components/Step"
import DottedLine from "./components/DottedLine"
import Progress from "./components/Progress"

function App() {
  return (
    <div className="App">
      <Intro/>
      <div className="progress">
      <Step name="Ordered" date="May 10"/>
      <DottedLine/>
      <Step name="Estimated May 11" address="66 Perry Street" state="West village,NY 10014" />
      <DottedLine/>
      <Step name="Estimated May 12" office="Health department Office"/>
      <DottedLine/>
      <Step name="Estimated May 22" address="66 Perry Street" state="West village,NY 10014" />
      </div>
    </div>
  );
}

export default App;
