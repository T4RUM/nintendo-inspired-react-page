import "./Cards.css";
// Imagens dos jogos em destaque
import PaperMario from "../../../../public/paper-mario.jpg";
import MarioParty from "../../../../public/mario-party.jpg";
import MetalSlug from "../../../../public/metal-slug.jpg";
import Overcooked from "../../../../public/overcooked.jpg";
import Zelda from "../../../../public/zelda.jpg";
// Imagens dos jogos Favoritos
import TacticsOgre from "../../../../public/tactics-ogre.jpg";
import SuperSmashBros from "../../../../public/super-smash-bros.jpg";
import Kirby from "../../../../public/kirby.jpg";
import MarioKart from "../../../../public/mario-kart.jpg";
import AdvanceWars from "../../../../public/advance-wars.jpg";
// Imagens das Novidades
import MarioRabbids from "../../../../public/novidades-card.jpg";
import F99 from "../../../../public/F99.jpg";

// Array de objetos dos jogos em destaque
const emDestaque = [
  {
    cod: 1,
    imagem: PaperMario,
    titulo: "Paper Mario™: The Thousand-Year Door",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 2,
    imagem: MarioParty,
    titulo: "Super Mario Party™ Jamboree",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 3,
    imagem: MetalSlug,
    titulo: "METAL SLUG ATTACK RELOADED",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 4,
    imagem: Overcooked,
    titulo: "Overcooked! 2",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 5,
    imagem: Zelda,
    titulo: "The Legend of Zelda™: Echoes of Wisdom",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
];
// Array de objetos dos jogos favoritos
const jogosFavoritos = [
  {
    cod: 1,
    imagem: TacticsOgre,
    titulo: "Tactics Ogre: Reborn",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 2,
    imagem: SuperSmashBros,
    titulo: "Super Smash Bros.™ Ultimate",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 3,
    imagem: Kirby,
    titulo: "Kirby™ and the Forgotten Land",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 4,
    imagem: MarioKart,
    titulo: "Mario Kart™ 8 Deluxe",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
  {
    cod: 5,
    imagem: AdvanceWars,
    titulo: "Advance Wars™ 1+2: Re-Boot Camp",
    tag: "Já disponível",
    console: "Nintendo Switch",
  },
];

// Array de objetos das Novidades
const novidades = [
  {
    cod: 1,
    imagem: MarioRabbids,
    data: "07/07/24",
    titulo:
      "Experimente o teste de jogo mais recente, MARIO + RABBIDS SPARKS OF HOPE",
    descricao:
      "Ajude Mario e Rabbid Peach a colocar ordem no cosmos! Do dia 8 de julho, às 10h até o dia 14 de julho, às 23h59 (horário do Pacífico), os usuários*...",
  },
  {
    cod: 2,
    imagem: F99,
    data: "03/07/24",
    titulo:
      "Exclusivo para assinantes do Nintendo Switch Online! Jogue o novo conteúdo do jogo F-ZERO 99 com a última atualização!",
    descricao:
    "Uma nova atualização sem custo adicional chegou acelerada ao jogo F-ZERO™ 99! Se você ainda não experimentou, F-ZERO 99 é um jogo de...",
  },
];

// Função 'map' para percorrer o array de objetos do jogos em destaque
function Cards() {
  // Mapeamento para os jogos em destaque
  const itensCards = emDestaque.map((card) => (

      <div className="container-box" key={card.cod}>
        <img className="img-card" src={card.imagem} alt="Banner Luigi" />
        <h3 className="titulo-game">{card.titulo}</h3>
        <div className="tag-disponivel">{card.tag}</div>
        <span className="tag-console">{card.console}</span>
      </div>

  ));

  // Mapeamento para os jogos favoritos
  const itensCards2 = jogosFavoritos.map((card) => (
    <div className="container-box" key={card.cod}>
      <img className="img-card" src={card.imagem} alt="Banner Luigi" />
      <h3 className="titulo-game">{card.titulo}</h3>
      <div className="tag-disponivel">{card.tag}</div>
      <span className="tag-console">{card.console}</span>
    </div>
  ));

  // Mapeamento para as novidades
  const itensCards3 = novidades.map((card) => (
    <div className="novidades" key={card.cod}>
      <img className="img-novidade" src={card.imagem} alt="" />
      <small className="date">{card.data}</small>
      <h3 className="titulo-novidades">{card.titulo}</h3>
      <p className="descricao-novidades">{card.descricao}</p>
      <span className="btn-saiba-mais">Saiba mais</span>
    </div>
  ));

  return (
    <>
      <h2 className="titulo-sessao">Em destaque</h2>
      <div className="container-cards">{itensCards}</div>
      <h2 className="titulo-sessao">Jogos Favoritos</h2>
      <div className="container-cards">{itensCards2}</div>
      <h2 className="titulo-sessao">Novidades</h2>
      <div className="container-cards-novidade">{itensCards3}</div>
    </>
  );
}

export default Cards;
