import happy from "../assets/img/party.png";
import sad from "../assets/img/sad.png";

function Feedback({ cont, questions, sadMessage }) {
  if (cont !== questions.length) {
    return "";
  } else {
    return (
      <div className="feedback">
        <div className="title">
          <img className="emoction" src={sadMessage ? sad : happy} />
          {sadMessage ? "Putz..." : "Parabéns!"}
        </div>
        <div className="message">
          {sadMessage
            ? "Ainda faltam alguns... Mas não desanime!"
            : "Você não esqueceu de nenhum flashcard!"}
        </div>
      </div>
    );
  }
}

export default Feedback;
