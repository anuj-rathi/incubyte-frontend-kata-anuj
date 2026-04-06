import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PokemonList from "../pages/PokemonList";

//test for user interaction 
test("updates search input value", () => {
  render(<PokemonList />);

  const input = screen.getByPlaceholderText(/search/i);

  fireEvent.change(input, { target: { value: "pikachu" } });

  expect(input).toHaveValue("pikachu");
});