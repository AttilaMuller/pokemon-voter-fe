import { Reducer, combineReducers } from "redux";
import { PokemonActionType, PokemonState } from "./pokemon/PokemonTypes";
import { pokemonReducer } from "./pokemon/PokemonReducer";

export type AppState = {
    pokemon: PokemonState;
  };
  
  const reducers: Reducer<AppState, PokemonActionType> = combineReducers<AppState>({
    pokemon: pokemonReducer as unknown as PokemonState,
  });

  export default reducers;