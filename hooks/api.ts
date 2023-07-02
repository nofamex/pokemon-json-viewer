import { searchPokemon } from "@/lib/fetcher";
import { SearchPokemonHooks, SearchPokemonResponse } from "@/types/api";
import useSWR from "swr";

export const useSearchPokemon = (name: string): SearchPokemonHooks => {
  const { data, error, isLoading } = useSWR<SearchPokemonResponse, Error>(
    name,
    searchPokemon,
  );

  return {
    data,
    error,
    isLoading,
  };
};
