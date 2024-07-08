import "./Gallery.css";
import Pix from "../../../../public/pix.png";
import backgroundFooter from "../../../../public/footer-background.png";
import Cards from "../cards/Cards";


function Gallery() {
  return (
    <>
      <section className="cards">
        <Cards />
      </section>
      <section className="content">
        <section className="news-part-1">

        </section>
        <h2 className="tittle-pix">Pague com Boleto ou PIX agora!</h2>
        <img className="pix" src={Pix} alt="" />
        <div className="container-pix-text">
          <span className="text-pix">
            Perfeito para quem gosta de jogar: Cartão presente digital do
            Nintendo eShop
          </span>
          <button className="btn-pix">Compre Agora</button>
        </div>
      </section>
      <section className="background-together"></section>
    </>
  );
}

export default Gallery;
