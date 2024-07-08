import "./Footer.css";
import logoNintendo from "../../../../public/logoNintendo.png";
import logoInstagram from "../../../../public/instagram.png";
import logoFacebook from "../../../../public/facebook.png";
import logoX from "../../../../public/twitter.png";


function Footer() {
  return (
    <>
      <section className="footer-father">
        <div className="footer-one">
          <img
            className="logo-nintendo-footer"
            src={logoNintendo}
            alt="Logo da Nintendo"
          />
          <div className="redes-sociais">
            <img
              className="logo-instagram-footer"
              src={logoInstagram}
              alt="Logo do instagram"
            />
            <img
              className="logo-facebook-footer"
              src={logoFacebook}
              alt="Logo do facebook"
            />
            <img className="logo-x-footer" src={logoX} alt="Logo do Twitter" />
          </div>
        </div>
        <div className="footer-two">
          <div className="sobre">
            <ul className="list-footer">
              <li className="titulos-footer">Sobre a Nintendo</li>
              <li>Responsabilidade social corporativa (em inglês)</li>
            </ul>
          </div>
          <div className="loja">
            <ul className="list-footer">
              <li className="titulos-footer">Loja</li>
              <li>Jogos</li>
              <li>Hardware</li>
              <li>Ofertas e promoções</li>
              <li>Online service</li>
            </ul>
          </div>
          <div className="assistencia">
            <ul className="list-footer">
              <li className="titulos-footer">Asistência</li>
              <li>Nintendo Switch</li>
              <li>Conta Nintendo</li>
              <li>Outros consoles</li>
              <li>Reparos</li>
            </ul>
          </div>
          <div className="pais">
            <ul className="list-footer">
              <li className="titulos-footer">Pais</li>
              <li>Informação para os pais</li>
              <li>Controle dos pais</li>
            </ul>
          </div>
          <div className="comunidade">
            <ul className="list-footer">
              <li className="titulos-footer">Comunidade</li>
              <li>Diretrizes comunitárias</li>
              <li>Princípios de segurança online</li>
            </ul>
          </div>
          <div className="privacidade">
            <ul className="list-footer">
              <li className="titulos-footer">Privacidade</li>
              <li>Política de privacidade</li>
              <li>Cookies e anúncios com base em interesses</li>
            </ul>
          </div>
        </div>
        <div className="footer-three">
          <div className="text-01">
            <span className="ultimo-footer">© Nintendo.</span>
            <span className="ultimo-footer">
              Os jogos são propriedade de seus respectivos donos.
            </span>
            <span className="ultimo-footer">
              Nintendo of America Inc. A sede está localizada em
              Redmond,Washington (EUA).
            </span>
          </div>
          <div className="text-02">
            <a href="#">
              <span className="ultimo-footer">Fale conosco</span>
            </a>
            <a href="#">
              <span className="ultimo-footer">Termos de uso</span>
            </a>
            <a href="#">
              <span className="ultimo-footer">Documentos e Políticas</span>
            </a>
            <a href="#">
              <span className="ultimo-footer">Portuguese (Brazil)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
