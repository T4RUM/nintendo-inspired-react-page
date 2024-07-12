import "./Banner.css";
import BannerLuigi from "../../../public/banner.png";
import Livre from "../../../public/livre.png";
import Background from "../../../public/background.jpg";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdGames } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";

function Banner() {
  return (
    <>
      <section className="menu">
        <ul>
          <li>
            {" "}
            <MdGames />
            Jogos
          </li>
          <li>
            {" "}
            <BsNintendoSwitch /> Nintendo Switch
          </li>
          <li>
            {" "}
            <BiSolidMessageAltDetail />
            Novidades e eventos
          </li>
        </ul>
      </section>
      <section className="container-banner">
        <img className="banner" src={BannerLuigi} alt="Banner Luigi" />
      </section>
      <section className="description">
        <div className="saiba-mais">
          <h2>Luigi's Mansion™ 2 HD</h2>
          <button className="btn-saiba-mais2" type="submity">
            Saiba mais
          </button>
        </div>
        <div className="livre">
          <a
            href="https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
            target="blank"
          >
            <img
              className="conteudo-livre"
              src={Livre}
              alt="Icone Livre para todos os publicos"
            />

            <p>Medo, Violência Fantasiosa</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Banner;
