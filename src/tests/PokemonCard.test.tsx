import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonCard from "../components/PokemonCard";
import { BrowserRouter } from "react-router-dom";

//test for UI rendering and accessibility (image role)
test("renders pokemon name and image", () => {
  render(
    <BrowserRouter>
      <PokemonCard pokemon={{ name: "pikachu", image: "img.png" }} />
    </BrowserRouter>
  );

  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});