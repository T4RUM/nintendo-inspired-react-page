// Contact.jsx

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../input/Input";
import "./Contact.css";
import BannerContact from "../../../public/bannerContact.png";

function Contact() {
  const methods = useForm();

  function handleFormSubmit(data) {
    console.log(data);
    
  }

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

      <div className="containerFormContact">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <Input
              label={"Apelido"}
              type={"text"}
              id={"apelido"}
              maxLength={10}
              placeholder={"Máximo de 10 caracteres"}
              description={
                "Obs.: Isto será usado para comunicações da Nintendo e não será mostrado a outros sem aviso prévio."
              }
              {...methods.register("apelido", { required: true })}
            />
            <Input
              label={"Endereço de e-mail"}
              type={"email"}
              id={"email"}
              placeholder={"Endereço de e-mail"}
              description={
                "*É recomendado utilizar um endereço de e-mail que possa ser acessado de um computador ou de um navegador de internet na criação da sua conta Nintendo."
              }
              {...methods.register("email", { required: true })}
            />

            <Input
              label={"Feedback"}
              type={"textarea"} 
              id={"feedback"}
              maxLength={1000}
              placeholder={"Digite aqui o seu Feedback"}
              {...methods.register("feedback", { required: true })}
            />

            <div className="containerButton">
              <button className="botaoFeedBack" type="submit">
                Enviar Feedback
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default Contact;
