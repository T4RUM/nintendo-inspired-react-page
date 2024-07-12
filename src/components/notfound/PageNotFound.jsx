import "./PageNotFound.css";
import { BsFillGiftFill } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import imgnotfound from "../../../public/notfound.png";
import CardFooter from "../cardFooter/CardFooter";


function PageNotFound() {
  const infoCard = [
    {
      icon: <BsFillGiftFill size={45} />,
      text: "Inserir código",
    },
    {
      icon: <BsCreditCardFill size={70} />,
      text: "Cartão presente digital do Nintendo eShop",
    },
    {
      icon: <BsFillQuestionSquareFill  size={45} />,
      text: "Atendimento ao consumidor",
    },
  ];
  return (
    <>
      <main>
        <div className="container-one">
          <img className="waluigi" src={imgnotfound} alt="" />
          <h2 className="titulo-notfound">Opa!</h2>
          <pre className="descricao-notfound">
            {`
         A informação que você está procurando não pode ser encontrada.
             Tente pesquisar novamente ou explore um dos links abaixo:
          `}
          </pre>
        </div>
        <div>
          <h1 className="titulo-explorando">Continue explorando:</h1>
        </div>
        <section className="menu-opcoes">
          {infoCard.map((card) => (
            <CardFooter>
              {card.icon} <span className="descricao-cards">{card.text}</span>
            </CardFooter>
          ))}
        </section>
      </main>
    </>
  );
}

export default PageNotFound;
