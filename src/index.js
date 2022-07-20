import React from "react";
import ReactDOM from "react-dom";
import Screen1 from "./screen1";

function App() {
  return (
    <React.Fragment>
      {/* <Screen1 /> */}
      <div className="screen2">
        <div className="head">
          <div>
            <img className="smallLogo" src="./assets/logo-pequeno2.png" />
          </div>
          <div className="smallBranch">ZapRecall</div>
        </div>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
