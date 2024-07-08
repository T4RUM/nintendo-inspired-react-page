import "./Navbar.css";
import logoNintendo from "../../../../public/logoNintendo.png";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";






function handleClick(){
  alert("Este site está em Desenvolvimento")
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logoNintendo} alt="Logo da Nintendo" />
      </div>
      <form className="navbar-search" role="search">
      <input type="text" placeholder="Pesquisar" aria-label="Pesquisar" />
      <IoIosSearch className="search-icon" />
    </form>
      <nav className="navbar-nav">
        <ul>
          <li ><a href="#" onClick={handleClick}><RiQuestionnaireFill />Assistência</a></li>
          <li ><a href="#" onClick={handleClick}><FaHeart />Lista de desejos</a></li>
          <li ><a href="#" onClick={handleClick}><FaUserLarge />Iniciar sessão / Criar uma conta</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
