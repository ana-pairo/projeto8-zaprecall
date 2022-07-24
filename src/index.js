import React from "react";
import "./assets/reset.css";
import "./assets/style.css";
import ReactDOM from "react-dom";
import Home from "./Home/Home";
import API from "./API";

function App() {
  const [start, setStart] = React.useState(true);
  // const API = [
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "uma", answered: false, answer: "", click: false },
  //   { question: "duas", answered: false, answer: "", click: false },
  // ];

  // const questions = [...API].sort(() => Math.random() - 0.5);

  return (
    <React.Fragment>
      {start ? <Home start={start} setStart={setStart} /> : <API />}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
