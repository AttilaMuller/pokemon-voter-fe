import { PokemonAction, PokemonActionType, PokemonState } from "./PokemonTypes";

const initialState: PokemonState = {
    loading: false,
};

export function pokemonReducer(
    state = initialState,
    action: PokemonActionType
): PokemonState {
    switch (action.type) {
        case PokemonAction.RANDOM_POKEMONS_GET:
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
        case PokemonAction.RANDOM_POKEMONS_GET_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}