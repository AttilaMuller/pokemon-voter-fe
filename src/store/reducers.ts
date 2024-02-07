import { combineReducers } from "redux";
import { PokemonState } from "./pokemon/PokemonTypes";
import { pokemonReducer } from "./pokemon/PokemonReducer";

export type AppState = {
    pokemon: PokemonState;
  };
  
  export default combineReducers({
    pokemon: pokemonReducer,
  });