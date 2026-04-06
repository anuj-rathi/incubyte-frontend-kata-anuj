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

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading Pokémon...
        </p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p
          role="alert"
          className="text-red-500 text-lg font-semibold bg-red-50 px-6 py-3 rounded-lg shadow"
        >
          {error}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full transition hover:shadow-2xl">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center capitalize mb-6 text-gray-800">
          {pokemon.name}
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-36 h-36 drop-shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Experience */}
        <p className="text-center text-gray-500 mb-4">
          Base Experience:{" "}
          <span className="font-semibold text-gray-700">
            {pokemon.experience}
          </span>
        </p>

        {/* Abilities */}
        <div className="mb-5">
          <h2 className="font-semibold text-gray-700 mb-2">Abilities</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {pokemon.abilities.map((a: string) => (
              <li key={a} className="capitalize">
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Types */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Types</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 capitalize shadow-sm"
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