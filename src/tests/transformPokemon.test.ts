import { expect, test } from "vitest";
import { transformPokemon } from "../utils/transformPokemon";

// test for data transformation, flattening, mapping
test("transforms API response correctly", () => {
  const mock = {
    id: 1,
    name: "bulbasaur",
    abilities: [
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
    ],
    base_experience: 64,
    types: [{ type: { name: "grass" } }],
  };

  const result = transformPokemon(mock);

  expect(result).toEqual({
    name: "bulbasaur",
    abilities: ["overgrow", "chlorophyll"],
    experience: 64,
    image: expect.any(String),
    types: ["grass"],
  });
});