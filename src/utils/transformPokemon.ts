export function transformPokemon(data: any) {
  return {
    // name: data.name,
    // abilities: data.abilities.map((a: any) => a.ability.name),
    // experience: data.base_experience,
    // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
    // types: data.types?.map((t: any) => t.type.name) || [],
  };
}