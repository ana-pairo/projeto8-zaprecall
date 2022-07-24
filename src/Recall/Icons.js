function Icons({ questions }) {
  const iconName = {
    correct: "checkmark-circle",
    parcial: "help-circle",
    wrong: "close-circle",
  };

  return (
    <div className="icons">
      {questions.map((question, index) =>
        question.answered ? (
          <ion-icon
            key={index}
            class={question.result}
            name={iconName[question.result]}
          ></ion-icon>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Icons;
