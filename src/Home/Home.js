import "./style.css";
import logo2 from "../assets/img/logo2.png";

function Home({ start, setStart }) {
  return (
    <div className="home">
      <img className="logo" src={logo2} />
      <div className="branch">ZapRecall</div>
      <div className="startButton" onClick={() => setStart(!start)}>
        Iniciar Recall
      </div>
    </div>
  );
}

export default Home;
