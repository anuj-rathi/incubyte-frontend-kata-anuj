// src/pages/PokemonList.tsx
import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/pokemon";
import PokemonCard from "../components/PokemonCard";

export default function PokemonList() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPokemonList().then((data) => {
      setList(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    setFiltered(
      list.filter((p: any) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, list]);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Pokemon List
      </h1>

      <input
        aria-label="Search Pokemon"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block mx-auto mb-6 px-4 py-2 w-full max-w-md border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((p: any) => (
          <PokemonCard
            key={p.name}
            pokemon={{
              ...p,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split("/")[6]}.png`,
            }}
          />
        ))}
      </div>
    </main>
  );
}