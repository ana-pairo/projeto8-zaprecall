export default Footer;

function Footer({ questions }) {
  let cont = 0;

  questions.map((question) => {
    if (question.answered === true) {
      cont++;
    }
  });

  return (
    <div className="footer">
      {cont}/{questions.length} CONCLUÍDOS
    </div>
  );
}
