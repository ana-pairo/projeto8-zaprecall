import Recall from "./Recall/Recall";

function API() {
  const dataAPI = [
    {
      statement: "duas",
      answered: false,
      answer:
        "resposta disso aqui e dkodkdodk dokodkod dkkdkdk kkdkdkdkin, acerta ai",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "duaoksaok jsdnsi jsiajdias djs",
      answered: false,
      answer: "resposta disso aqui ein, acerta ai",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "duaoksaok jsdnsi jsiajdias djs",
      answered: false,
      answer: "resposta disso aqui ein, acerta ai",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "duas",
      answered: false,
      answer: "resposta disso aqui ein, acerta ai",
      clicked: false,
      fliped: false,
      result: "",
    },
  ];

  const data = [...dataAPI].sort(() => Math.random() - 0.5);
  console.log(data, dataAPI);

  return <Recall data={data} />;
}

export default API;
