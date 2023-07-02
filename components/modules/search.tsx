"use client";

import { Input } from "@/components/ui/input";
import { useSearchPokemon } from "@/hooks/api";
import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import PokemonList from "./pokemonList";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchDebounceValue = useDebounce<string>(searchValue, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const { data, error } = useSearchPokemon(searchDebounceValue);

  return (
    <div>
      <Input
        type="text"
        placeholder="search your pokemon"
        className="mb-4"
        onChange={handleChange}
      />
      {!error && data && <PokemonList data={data} />}
    </div>
  );
};

export default Search;
