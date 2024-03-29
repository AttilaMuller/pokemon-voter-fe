import { PokemonAction, PokemonActionType, PokemonState } from "./PokemonTypes";

const initialState: PokemonState = {
    loading: false,
};

export function pokemonReducer(
    state: PokemonState | undefined = initialState,
    action: PokemonActionType
): PokemonState {
    switch (action.type) {
        case PokemonAction.RANDOM_POKEMONS_GET:
        case PokemonAction.TOP_TEN_POKEMONS_GET:
        case PokemonAction.RESET_POKEMON_VOTES:
            return {
                ...state,
                loading: true,
            };
        case PokemonAction.RANDOM_POKEMONS_GET_SUCCESS:
            return {
                ...state,
                randomPokemons: action.payload.pokemons,
                loading: false,
            };
        case PokemonAction.TOP_TEN_POKEMONS_GET_SUCCESS:
            return {
                ...state,
                topTenPokemons: action.payload.pokemons,
                loading: false,
            };
        case PokemonAction.VOTE_FOR_POKEMON:
            return {
                ...state,
                loading: true,
            };
        case PokemonAction.RANDOM_POKEMONS_GET_FAIL:
        case PokemonAction.VOTE_FOR_POKEMON_FAIL:
        case PokemonAction.RESET_POKEMON_VOTES_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}