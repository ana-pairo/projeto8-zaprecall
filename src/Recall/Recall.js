import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Head from "./Head";
import "./style.css";
import React from "react";

function Recall({ data }) {
  const [questions, setQuestions] = React.useState([...data]);

  function updateQuestions(result, index) {
    const newQuestions = [...questions];
    newQuestions[index].answered = true;
    newQuestions[index].result = result;
    setQuestions(newQuestions);
  }

  return (
    <div className="recall">
      <Head />
      <div className="flashcards">
        {questions.map((question, index) => (
          <Flashcard
            updateQuestions={updateQuestions}
            statement={question.statement}
            answered={question.answered}
            answer={question.answer}
            clicked={question.clicked}
            fliped={question.fliped}
            result={question.result}
            key={index}
            index={index}
          />
        ))}
      </div>
      <Footer questions={questions} />
    </div>
  );
}

export default Recall;
