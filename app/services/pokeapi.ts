const URL_POKE = "https://pokeapi.co/api/v2/pokemon";
import type {
  Pokemon,
  PokemonBasic,
  PokemonListResponse,
} from "../types/interfaces";

// This function will return a list of all the Pokémon (in total, there are less than 2000)
export async function getAllPokemons(): Promise<PokemonBasic[]> {
  try {
    const response: Response = await fetch(`${URL_POKE}?limit=2000`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Pokémon list: ${response.status} ${response.statusText}`
      );
    }

    const data: PokemonListResponse = await response.json();
    console.log("Fetched Pokémon list:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    return []; // Return an empty array in case of failure
  }
}

// Fetch a Pokémon by name
export async function getPokemonByName(
  name: string | undefined
): Promise<Pokemon | null> {
  try {
    const response: Response = await fetch(
      `${URL_POKE}/${name?.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(
        `Pokémon "${name}" not found: ${response.status} ${response.statusText}`
      );
    }

    const pokemon: Pokemon = await response.json();
    console.log(`Fetched Pokémon: ${name}`, pokemon);
    return pokemon;
  } catch (error) {
    console.error(`Error fetching Pokémon "${name}":`, error);
    return null; // Return null if the Pokémon is not found or there's an error
  }
}

// Fetch a Pokémon by its URL
export async function getPokemonByURL(URL: string): Promise<Pokemon | null> {
  try {
    const response: Response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon from URL: ${URL}`);
    }

    const pokemon: Pokemon = await response.json();
    console.log("Fetched Pokémon from URL:", pokemon);
    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokémon by URL:", error);
    return null;
  }
}
