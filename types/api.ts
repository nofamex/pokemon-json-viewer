export type ApiHooksResponse<T> = {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
};

export interface SearchPokemonResponse {
  name: string;
}

export type SearchPokemonHooks = ApiHooksResponse<SearchPokemonResponse>;
