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

    TOP_TEN_POKEMONS_GET = "[POKEMON] GET TOP TEN POKEMONS",
    TOP_TEN_POKEMONS_GET_FAIL = "[POKEMON] GET TOP TEN POKEMONS ERROR",
    TOP_TEN_POKEMONS_GET_SUCCESS = "[POKEMON] GET TOP TEN POKEMONS SUCCESS",

    RESET_POKEMON_VOTES = "[POKEMON] RESET POKEMON VOTES",
    RESET_POKEMON_VOTES_FAIL = "[POKEMON] RESET POKEMON VOTES FAIL",
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

interface TopTenPokemonsGet {
    type: PokemonAction.TOP_TEN_POKEMONS_GET;
}

interface TopTenPokemonsGetSuccess {
    type: PokemonAction.TOP_TEN_POKEMONS_GET_SUCCESS;
    payload: { pokemons: Pokemon[] };
}

interface TopTenPokemonsGetFail {
    type: PokemonAction.TOP_TEN_POKEMONS_GET_FAIL;
    payload: string;
}

interface ResetPokemonVotes {
    type: PokemonAction.RESET_POKEMON_VOTES;
}

interface ResetPokemonVotesFail {
    type: PokemonAction.RESET_POKEMON_VOTES_FAIL;
    payload: string;
}


export type PokemonActionType =
    | RandomPokemonsGet
    | RandomPokemonsGetSuccess
    | RandomPokemonsGetFail
    | VoteForPokemon
    | VoteForPokemonFail
    | TopTenPokemonsGet
    | TopTenPokemonsGetSuccess
    | TopTenPokemonsGetFail
    | ResetPokemonVotes
    | ResetPokemonVotesFail;