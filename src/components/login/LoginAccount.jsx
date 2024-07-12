import "./LoginAccount.css";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginAccount() {
  return (
    <>
      <div className="containerPrincipal">
        <h1 className="tituloCriarConta">Conta Nintendo</h1>
        <div className="containerFormulario">
          <div className="formularioCriarConta">
            <h3 className="tituloDoFormulario">Fazer o login usando senha</h3>
            <form className="formulario">
              <label htmlFor="email" className="labelFormulario">
                Endereço de e-mail/ID de acesso
              </label>
              <input type="email" id="email" className="inputFormulario" />

              <label htmlFor="senha" className="labelFormulario">
                Senha
              </label>
              <input type="password" id="senha" className="inputFormulario" />
            </form>
            <button className="botaoDeLogin" type="submit">
              Fazer login
            </button>
            <div className="sso">
              <button className="botaoDeLoginGoogle" type="submit">
                <span className="googleIcon">
                  <FaGoogle />
                </span>{" "}
                Google
              </button>
              <button className="botaoDeLoginApple" type="submit">
                <span className="appleIcon">
                  <FaApple />
                </span>{" "}
                Apple
              </button>
            </div>
            <div className="cadastro">
              <a className="esqueceuSenha">Esqueceu sua senha?</a>
            </div>
          </div>
        </div>
        <div className="sessaoCriarConta">
          <p>Ainda não possui uma conta?</p>
          <Link to="/criar-conta">
            <button>Criar uma conta Nintendo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginAccount;
