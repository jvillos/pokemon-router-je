import Card from "../Card/Card";
import { Link } from "react-router";
import type { PokemonBasic } from "~/types/interfaces";

interface CardListProps {
  pokemons: PokemonBasic[];
}

const CardList = ({ pokemons = [] }: CardListProps) => {
  // Default to an empty array if undefined
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {pokemons.length === 0 ? ( // Show a message if no Pokémon are found
        <p className="text-white text-center col-span-full">
          No Pokémon found.
        </p>
      ) : (
        pokemons.map((pokemon: PokemonBasic) => (
          <Link
            to={`/pokemon/${pokemon.name}`}
            key={pokemon.url}
            className="block transform transition duration-300 hover:scale-105"
          >
            <Card pokemon={pokemon} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CardList;
