import { Routes, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
    </Routes>
  );
}