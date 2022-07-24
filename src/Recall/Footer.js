import Feedback from "./Feedback";
import Icons from "./Icons";

function Footer({ questions }) {
  let cont = 0;
  let sadMessage = false;
  let feedback = false;
  let restart = false;

  questions.map((question) => {
    if (question.answered) {
      cont++;
      feedback = true;
    }
    if (question.result === "wrong") {
      sadMessage = true;
    }
  });

  return (
    <div className="footer">
      <Feedback sadMessage={sadMessage} cont={cont} questions={questions} />
      {cont}/{questions.length} CONCLUÍDOS
      {feedback ? <Icons questions={questions} /> : ""}
    </div>
  );
}

export default Footer;
