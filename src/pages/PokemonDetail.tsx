// src/pages/PokemonDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/pokemon";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPokemon(name!)
      .then(setPokemon)
      .catch(() => setError("Failed to load Pokémon"))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading)
    return <p className="text-center mt-10">Loading...</p>;

  if (error)
    return <p role="alert" className="text-center text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center capitalize mb-4">
          {pokemon.name}
        </h1>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />

        <div className="mt-4">
          <h2 className="font-semibold">Abilities</h2>
          <ul className="list-disc list-inside">
            {pokemon.abilities.map((a: string) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Types</h2>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map((t: string) => (
              <span
                key={t}
                className="px-2 py-1 bg-blue-100 rounded text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}