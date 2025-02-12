import type { PokemonBasic } from "../../types/interfaces";

interface CardProps {
  pokemon: PokemonBasic;
}

function Card({ pokemon }: CardProps) {
  return (
    <div className="card">
      <img
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
      />
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
    </div>
  );
}

export default Card;
