import React from "react";
import flip from "../assets/img/setinha2.png";

function Flashcard({
  clicked,
  index,
  statement,
  answer,
  fliped,
  answered,
  result,
  updateQuestions,
}) {
  const [isClicked, setIsClicked] = React.useState(clicked);
  const [isFliped, setIsFliped] = React.useState(fliped);

  if (answered) {
    if (answered && result === "correct") {
      return (
        <div key={index} className="flashcard correct">
          Pergunta {index + 1}
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      );
    }
    if (answered && result === "parcial") {
      return (
        <div key={index} className="flashcard parcial">
          Pergunta {index + 1}
          <ion-icon name="help-circle"></ion-icon>
        </div>
      );
    }
    if (answered && result === "wrong") {
      return (
        <div key={index} className="flashcard wrong">
          Pergunta {index + 1}
          <ion-icon name="close-circle"></ion-icon>
        </div>
      );
    }
  }

  if (isFliped) {
    return (
      <div className="flashcardAnswer">
        <div className="statement">{answer}</div>
        <div className="options">
          <div
            className="firstOption"
            onClick={() => {
              updateQuestions("wrong", index);
            }}
          >
            Não lembrei
          </div>
          <div
            className="secondOption"
            onClick={() => {
              updateQuestions("parcial", index);
            }}
          >
            Quase não lembrei
          </div>
          <div
            className="thirdOption"
            onClick={() => {
              updateQuestions("correct", index);
            }}
          >
            Zap!
          </div>
        </div>
      </div>
    );
  }

  if (isClicked) {
    return (
      <div className="flashcardQuestion">
        <div className="statement">{statement}</div>
        <div>
          <img className="arrow" src={flip} onClick={() => setIsFliped(true)} />
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard" onClick={() => setIsClicked(!isClicked)}>
      Pergunta {index + 1}
      <ion-icon name="play-outline"></ion-icon>
    </div>
  );
}

// <div className="flashcards">
//   {questions.map((question, index) => {
// if (question.answered && question.answer === "correct") {
//   return (
//     <div key={index} className="flashcard correct">
//       Pergunta {index + 1}
//       <ion-icon name="checkmark-circle"></ion-icon>
//     </div>
//   );
// }
// if (question.answered && question.answer === "parcial") {
//   return (
//     <div key={index} className="flashcard parcial">
//       Pergunta {index + 1}
//       <ion-icon name="help-circle"></ion-icon>
//     </div>
//   );
// }
// if (question.answered && question.answer === "wrong") {
//   return (
//     <div key={index} className="flashcard wrong">
//       Pergunta {index + 1}
//       <ion-icon name="close-circle"></ion-icon>
//     </div>
//   );
// }

//     return (
//       <div
//         key={index}
//         className="flashcard"
//         onClick={() => setClick(!click)}
//       >
//         Pergunta {index + 1}
//         <ion-icon name="play-outline"></ion-icon>
//       </div>
//     );
//   })}
// </div>

export default Flashcard;
