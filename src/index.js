import React from "react";
import "./assets/reset.css";
import "./assets/style.css";
import ReactDOM from "react-dom";
import Home from "./Home/Home";
import API from "./API";

function App() {
  const [start, setStart] = React.useState(true);

  return (
    <React.Fragment>
      {start ? <Home start={start} setStart={setStart} /> : <API />}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
