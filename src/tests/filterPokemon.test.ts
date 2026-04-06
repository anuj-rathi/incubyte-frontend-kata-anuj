import { expect, test } from "vitest";
import { filterPokemon } from "../utils/filterPokemon";

// test for search logic
test("filters pokemon by name", () => {
  const list = [{ name: "tikachu" }, { name: "ditto" }];

  const result = filterPokemon(list, "pik");

  expect(result).toEqual([{ name: "pikachu" }]);
});