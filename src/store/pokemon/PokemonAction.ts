import { Pokemon } from "../../models/PokemonModel";
import { PokemonAction, PokemonActionType } from "./PokemonTypes";

export function randomPokemonsGetAction(): PokemonActionType {
    return {
        type: PokemonAction.RANDOM_POKEMONS_GET,
    };
}

export function randomPokemonsGetSuccessAction(pokemons: Pokemon[]): PokemonActionType {
    return {
        type: PokemonAction.RANDOM_POKEMONS_GET_SUCCESS,
        payload: { pokemons },
    };
}

export function randomPokemonsGetFailAction(error: string): PokemonActionType {
    return {
        type: PokemonAction.RANDOM_POKEMONS_GET_FAIL,
        payload: error,
    };
}

export function voteForPokemonAction(id: number): PokemonActionType {
    return {
        type: PokemonAction.VOTE_FOR_POKEMON,
        payload: id,
    };
}

export function voteForPokemonFailAction(error: string): PokemonActionType {
    return {
        type: PokemonAction.VOTE_FOR_POKEMON_FAIL,
        payload: error,
    };
}