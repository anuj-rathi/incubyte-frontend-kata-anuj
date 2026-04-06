import { transformPokemon } from "../utils/transformPokemon";

export async function fetchPokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await res.json();
  return data.results;
}

export async function fetchPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  return transformPokemon(data);
}