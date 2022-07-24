import Recall from "./Recall/Recall";

function API() {
  const dataAPI = [
    {
      statement: "O que é JSX?",
      answered: false,
      answer: "Uma extensão de linguagem do JavaScript",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "O React é __",
      answered: false,
      answer: "uma biblioteca JavaScript para construção de interfaces",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "Componentes devem iniciar com __",
      answered: false,
      answer: "letra maiúscula",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "Podemos colocar __ dentro do JSX",
      answered: false,
      answer: "expressões",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "O ReactDOM nos ajuda __",
      answered: false,
      answer: "interagindo com a DOM para colocar componentes React na mesma",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "Usamos o npm para __",
      answered: false,
      answer: "gerenciar os pacotes necessários e suas dependências",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "Usamos props para __",
      answered: false,
      answer: "passar diferentes informações para componentes",
      clicked: false,
      fliped: false,
      result: "",
    },
    {
      statement: "Usamos estado (state) para __",
      answered: false,
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
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
