import React from "react";

function App() {
  return (
    <div className="App">
      <div className="all">
      <div className="intro">
        <h1 className="header">Your application so on the way.</h1>
        <h3 className="description">We shipped your package</h3>
      </div>
      <div className="progress">
        <div className="dot_container">
          <div className="dot"></div>
          <div className="text-description1">
        <h3 className="first_name">Ordered</h3>
        <h5 className="first_date">May 10</h5>
      </div>
        </div>
        <div className="progress_dots"></div>
        <div className="dot_container">
          <div className="dot"></div>
          <div className="text-description2">
        <h3 className="second_name">Estimated May 11</h3>
        <h5 className="address">66 Perry Street</h5>
        <h5 className="state">West village,NY 10014</h5>
      </div>
        </div>
        <div className="progress_dots"></div>
        <div className="dot_container">
          <div className="dot"></div>
          <div className="text-description3">
        <h3 className="third_name">Estimated May 12</h3>
        <h5 className="office">Health department Office</h5>
      </div>
        </div>
        <div className="progress_dots"></div>
        <div className="dot_container">
          <div className="dot"></div>
          <div className="text-description4">
        <h3 className="fourth_name">Estimated May 22</h3>
        <h5 className="address">66 Perry Street</h5>
        <h5 className="state">West village,NY 10014</h5>
      </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
