import React, { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../input/Input";
import "../../components/assistance/Contact.css";
import BannerContact from "../../../public/bannerContact.png";
import "./CreateAccount.css";

function CreateAccount() {
  const methods = useForm();

  function cadastro(data) {
    console.log(data, "aqui");
  }



  const countries = [
    "Afeganistão",
    "África do Sul",
    "Albânia",
    "Alemanha",
    "Andorra",
    "Angola",
    "Antígua e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Armênia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bangladesh",
    "Barbados",
    "Bahrein",
    "Bélgica",
    "Belize",
    "Benin",
    "Bermudas",
    "Bielorrússia",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botswana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burkina Faso",
    "Burundi",
    "Butão",
    "Cabo Verde",
    "Camarões",
    "Camboja",
    "Canadá",
    "Catar",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Colômbia",
    "Comores",
    "Congo",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa do Marfim",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Dinamarca",
    "Djibouti",
    "Dominica",
    "Egito",
    "El Salvador",
    "Emirados Árabes Unidos",
    "Equador",
    "Eritreia",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estados Unidos",
    "Estônia",
    "Eswatini",
    "Etiópia",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Gana",
    "Geórgia",
    "Gibraltar",
    "Grécia",
    "Granada",
    "Guatemala",
    "Guiana",
    "Guiné",
    "Guiné Equatorial",
    "Guiné-Bissau",
    "Haiti",
    "Honduras",
    "Hungria",
    "Iêmen",
    "Ilhas Cook",
    "Ilhas Marshall",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jordânia",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letônia",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macedônia",
    "Madagáscar",
    "Malásia",
    "Malawi",
    "Maldivas",
    "Mali",
    "Malta",
    "Marrocos",
    "Maurício",
    "Mauritânia",
    "México",
    "Micronésia",
    "Moçambique",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Noruega",
    "Nova Zelândia",
    "Omã",
    "Países Baixos",
    "Palau",
    "Panamá",
    "Papua-Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Polônia",
    "Portugal",
    "Quênia",
    "Quirguistão",
    "Reino Unido",
    "República Centro-Africana",
    "República Checa",
    "República Dominicana",
    "Romênia",
    "Ruanda",
    "Rússia",
    "Samoa",
    "San Marino",
    "Santa Lúcia",
    "São Cristóvão e Nevis",
    "São Tomé e Príncipe",
    "São Vicente e Granadinas",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Seychelles",
    "Singapura",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Sudão",
    "Suécia",
    "Suíça",
    "Suriname",
    "Tailândia",
    "Taiwan",
    "Tajiquistão",
    "Tanzânia",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Zâmbia",
    "Zimbábue",
  ];

  return (
    <>
      <div className="containerFather">
        <div className="containerForm">
          <div>
            <h1 className="tituloCriarConta">Criar uma conta Nintendo</h1>

            <span className="ssoCriarConta">
              Se você tem uma conta em um dos serviços a seguir, é ainda mais
              fácil criar uma conta Nintendo.
            </span>

            <div className="sso">
              <button className="botaoDeLoginGoogleCriarConta" type="submit">
                <span className="googleIcon">
                  <FaGoogle />
                </span>
                Google
              </button>

              <button className="botaoDeLoginAppleCriarConta" type="submit">
                <span className="appleIcon">
                  <FaApple />
                </span>
                Iniciar sessão com a Apple
              </button>
            </div>

            <div>
              <p className="descricaoFormulario">
                Se você não possui uma conta com um dos serviços listados acima,
                ou prefere não usar uma conta existente para criar a sua conta
                Nintendo, insira seus dados no formulário a seguir.
              </p>
              <div className="containerForm">
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(cadastro)}>
                    <Input
                      label={"Apelido"}
                      type={"text"}
                      id={"apelido"}
                      maxLength={"10"}
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
                      label={"Senha"}
                      type={"password"}
                      id={"senha"}
                      minLength={"8"}
                      placeholder={"Minimo de 8 caracteres"}
                      {...methods.register("senha", { required: true })}
                    />
                    <Input
                      label={"Confirmar Senha"}
                      type={"password"}
                      id={"confirmarSenha"}
                      minLength={"8"}
                      placeholder={"Minimo de 8 caracteres"}
                      {...methods.register("confirmarSenha", {
                        required: true,
                      })}
                    />

                    {/* <div className="labelInputWrapper1">
                      <div className="labelInputWrapperInner1">
                        <div className="containerLabel">
                          <label
                            className="labelFormularioCadastro1"
                            htmlFor="dataNascimento"
                          >
                            Data de nascimento
                          </label>
                        </div>
                        <div className="birth">
                          <div className="groupSelect">
                            <select
                              id="year"
                              className="inputFormularioCadastro1"
                              value={birthYear}
                              onChange={(e) => setBirthYear(e.target.value)}
                              {...methods.register("year", { required: true })}
                            >
                              <option value="" disabled>
                                Ano
                              </option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            <select
                              className="inputFormularioCadastro1"
                              value={birthMonth}
                              id="month"
                              onChange={(e) => setBirthMonth(e.target.value)}
                              // {...methods.register("month", {
                              //   required: true,
                              // })}
                            >
                              <option value="" disabled>
                                Mês
                              </option>
                              {months.map((month) => (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <select
                              className="inputFormularioCadastro1"
                              value={birthDay}
                              id="day"
                              onChange={(e) => setBirthDay(e.target.value)}
                              // {...methods.register("day", {
                              //   required: true,
                              // })}
                            >
                              <option value="" disabled>
                                Dia
                              </option>
                              {days.map((day) => (
                                <option key={day} value={day}>
                                  {day}
                                </option>
                              ))}
                            </select>
                          </div>

                          <span className="descricaoInputCadastro1">
                            *Não será possível mudar a sua data de nascimento
                            mais tarde.
                          </span>
                        </div>
                      </div>
                    </div> */}

                    <Input
                      label="Sexo"
                      id="sexo"
                      type="select"
                      options={[
                        { value: "", label: "(Nenhum)" },
                        { value: "masculino", label: "Masculino" },
                        { value: "feminino", label: "Feminino" },
                        { value: "nao-informar", label: "Não informar" },
                      ]}
                      {...methods.register("sexo", {
                        required: true,
                      })}
                    />
                    <Input
                      label="Data de nascimento"
                      id="dtNascimento"
                      type="date"
                      {...methods.register("dtNascimento", {
                        required: true,
                      })}
                      description="*Não será possível mudar a sua data de nascimento
                            mais tarde."
                    />

                    <Input
                      label="País ou região de residência"
                      id="pais"
                      type="select"
                      options={[
                        {
                          value: "",
                          label: "Selecione o país ou região",
                          disabled: true,
                        },
                        ...countries.map((country) => ({
                          value: country,
                          label: country,
                        })),
                      ]}
                      {...methods.register("pais", {
                        required: true,
                      })}
                    />

                    <div>
                      <button className="botaoFeedBack" type="submit">
                        Enviar Feedback
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;

//
