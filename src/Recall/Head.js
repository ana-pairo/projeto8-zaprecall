import logoPequeno from "../assets/img/logo-pequeno2.png";

function Head() {
  return (
    <div className="head">
      <div>
        <img className="smallLogo" src={logoPequeno} />
      </div>
      <div className="smallBranch">ZapRecall</div>
    </div>
  );
}

export default Head;
