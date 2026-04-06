export function filterPokemon(list: any[], query: string) {
  return list.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}