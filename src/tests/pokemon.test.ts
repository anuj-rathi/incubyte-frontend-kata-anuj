import { expect, test, vi } from "vitest";
import { fetchPokemon } from "../api/pokemon";
//test for API integration, transformation call
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        name: "blbasaur",
        abilities: [],
        base_experience: 64,
        types: [],
      }),
  })
) as any;

test("fetches and transforms pokemon data", async () => {
  const result = await fetchPokemon("bulbasaur");

  expect(result.name).toBe("bulbasaur");
});