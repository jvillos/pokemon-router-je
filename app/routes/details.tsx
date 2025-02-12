import { useParams, useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import type { Pokemon } from "../types/interfaces";
import { getPokemonByName } from "../services/pokeapi";

// **Loader function for React Router**
export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const pokemon: Pokemon | null = await getPokemonByName(params.name);
    return { pokemon: pokemon };
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    return { pokemon: null };
  }
}

function Details() {
  // Obtener datos del loader
  const { pokemon } = useLoaderData() as { pokemon: Pokemon | null };

  // Si no se encuentra el Pokémon, mostrar mensaje de error
  if (!pokemon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <h2 className="text-2xl font-bold">❌ Pokémon Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4 capitalize">{pokemon.name}</h2>

      {/* Imagen del Pokémon */}
      <div className="flex gap-6">
        <img
          src={
            pokemon.sprites.front_default ?? "https://via.placeholder.com/150"
          }
          alt={pokemon.name}
          className="w-40 h-40 object-contain bg-white rounded-lg shadow-lg p-2"
        />
        <img
          src={pokemon.sprites.front_shiny ?? "https://via.placeholder.com/150"}
          alt={`${pokemon.name} shiny`}
          className="w-40 h-40 object-contain bg-yellow-300 rounded-lg shadow-lg p-2"
        />
      </div>

      {/* Tipos del Pokémon */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-semibold"
          >
            {type.type.name.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Habilidades del Pokémon */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Abilities:</h3>
        <ul className="flex flex-wrap gap-2">
          {pokemon.abilities.map((ability) => (
            <li
              key={ability.ability.name}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
            >
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Estadísticas */}
      <div className="mt-6 w-full max-w-lg bg-white p-6 rounded-xl shadow-lg text-gray-900">
        <h3 className="text-xl font-bold text-center mb-4">Stats</h3>
        <div className="space-y-2">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="flex items-center">
              <span className="w-32 font-semibold capitalize">
                {stat.stat.name}:
              </span>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${stat.base_stat}%` }}
                ></div>
              </div>
              <span className="ml-3 font-semibold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
