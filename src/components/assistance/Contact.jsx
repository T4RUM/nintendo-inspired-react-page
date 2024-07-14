import React from "react";
import BannerContact from "../../../public/bannerContact.png";
import Input from "../input/Input";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="container">
        <img
          className="BannerContact"
          src={BannerContact}
          alt="Banner com os personagens principais do Mario"
        />
        <h1 className="tittleContact">
          Bem-vindos ao atendimento ao consumidor!
        </h1>
      </div>
      <div className="containerForm">
        <form>
          <Input
            label={"Apelido"}
            type={"text"}
            id={"apelido"}
            maxLength={"10"}
            placeholder={"Máximo de 10 caracteres"}
            description={
              "Obs.: Isto será usado para comunicações da Nintendo e não será mostrado a outros sem aviso prévio."
            }
          />
          <Input
            label={"Endereço de e-mail"}
            type={"email"}
            id={"email"}
            placeholder={"Endereço de e-mail"}
            description={
              "*É recomendado utilizar um endereço de e-mail que possa ser acessado de um computador ou de um navegador de internet na criação da sua conta Nintendo."
            }
          />
          <Input
            label={"Feedback"}
            type={"textarea"}
            id={"feedback"}
            placeholder={"Digite aqui o seu Feedback"}
          />
        </form>
        <div>
          <button className="botaoFeedBack" type="submit">
            Enviar Feedback
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
