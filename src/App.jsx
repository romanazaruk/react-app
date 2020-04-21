import React from "react";
import Intro from "./components/Intro";
import Step from "./components/Step";
import DottedLine from "./components/DottedLine";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="App">
      <Intro />
      <div className="progress">
        <Step name="Ordered" description="May 10" />
        <DottedLine />
        <Step
          name="Estimated May 11"
          description={<>66 Perry Street<br/> West village,NY 10014</>}
        />
        <DottedLine />
        <Step name="Estimated May 12" description="Health department Office" />
        <DottedLine />
        <Step
          name="Estimated May 22"
          description="66 Perry Street"
          description="West village,NY 10014"
        />
      </div>
    </div>
  );
}

export default App;
