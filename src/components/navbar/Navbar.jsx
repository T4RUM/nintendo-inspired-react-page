import "./Navbar.css";
import logoNintendo from "../../../public/logoNintendo.png";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function handleClick() {
  alert("Este site está em Desenvolvimento");
}

// Renomeie o componente para CustomNavbar para evitar conflito
function CustomNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logoNintendo} alt="Logo da Nintendo" /> </Link>
      </div>
      <form className="navbar-search" role="search">
        <input type="text" placeholder="Pesquisar" aria-label="Pesquisar" />
        <IoIosSearch className="search-icon" />
      </form>
      <nav className="navbar-nav">
        <ul>
          <li>
            <Link to="/assistencia">Assistência</Link>
          </li>
          <li>
            <Link to="/lista-de-desejos">Lista de desejos</Link>
          </li>
          <li>
            <Link to="/iniciar-sessao"> Iniciar sessão / Criar uma conta</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CustomNavbar;
