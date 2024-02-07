import { Pokemon } from "../../models/PokemonModel";

export interface PokemonState {
    randomPokemons?: Pokemon[];
    topTenPokemons?: Pokemon[];
    loading: boolean;
    error?: string;
}

export enum PokemonAction {
    RANDOM_POKEMONS_GET = "[POKEMON] GET RANDOM POKEMONS",
    RANDOM_POKEMONS_GET_FAIL = "[POKEMON] GET RANDOM POKEMONS ERROR",
    RANDOM_POKEMONS_GET_SUCCESS = "[POKEMON] GET RANDOM POKEMONS SUCCESS",

    VOTE_FOR_POKEMON = "[POKEMON] VOTE FOR POKEMON",
    VOTE_FOR_POKEMON_FAIL = "[POKEMON] VOTE FOR POKEMON ERROR",
    VOTE_FOR_POKEMON_SUCCESS = "[POKEMON] VOTE FOR POKEMON SUCCESS",
}

interface RandomPokemonsGet {
    type: PokemonAction.RANDOM_POKEMONS_GET;
}

interface RandomPokemonsGetSuccess {
    type: PokemonAction.RANDOM_POKEMONS_GET_SUCCESS;
    payload: { pokemons: Pokemon[] };
}

interface RandomPokemonsGetFail {
    type: PokemonAction.RANDOM_POKEMONS_GET_FAIL;
    payload: string;
}

interface VoteForPokemon {
    type: PokemonAction.VOTE_FOR_POKEMON;
    payload: number;
}

interface VoteForPokemonFail {
    type: PokemonAction.VOTE_FOR_POKEMON_FAIL
    payload: string;
}

export type PokemonActionType =
    | RandomPokemonsGet
    | RandomPokemonsGetSuccess
    | RandomPokemonsGetFail
    | VoteForPokemon
    | VoteForPokemonFail;