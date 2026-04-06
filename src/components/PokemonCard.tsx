// src/components/PokemonCard.tsx
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }: any) {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/pokemon/${pokemon.name}`)}
      style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}