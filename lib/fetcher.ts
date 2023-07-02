import { SearchPokemonResponse } from "@/types/api";

export const searchPokemon = async (
  name: string
): Promise<SearchPokemonResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  if (!res.ok) {
    throw new Error("failed to search pokemon");
  }
  return res.json();
};
