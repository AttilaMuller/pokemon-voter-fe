import { Epic, ofType } from "redux-observable";
import { catchError } from "rxjs/operators";
import { mergeMap, of, map } from "rxjs";
import { PokemonAction } from "./PokemonTypes";
import { getRandomPokemons, getTopTenPokemons, resetPokemonVotes, voteForPokemon } from "./PokemonService";
import { Pokemon } from "../../models/PokemonModel";

const randomPokemonsGetEpic: Epic<any> = ($actions, $state) =>
    $actions.pipe(
        ofType(PokemonAction.RANDOM_POKEMONS_GET),
        mergeMap(() =>
            getRandomPokemons().pipe(
                mergeMap(async (pokemons: Pokemon[]) => {
                    return {
                        type: PokemonAction.RANDOM_POKEMONS_GET_SUCCESS,
                        payload: { pokemons },
                    };
                }),
                catchError((error) =>
                    of({
                        type: PokemonAction.RANDOM_POKEMONS_GET_FAIL,
                        payload: error
                    })
                )
            )
        )
    );

const topTenPokemonsGetEpic: Epic<any> = ($actions, $state) =>
    $actions.pipe(
        ofType(PokemonAction.TOP_TEN_POKEMONS_GET),
        mergeMap(() =>
            getTopTenPokemons().pipe(
                mergeMap(async (pokemons: Pokemon[]) => {
                    return {
                        type: PokemonAction.TOP_TEN_POKEMONS_GET_SUCCESS,
                        payload: { pokemons },
                    };
                }),
                catchError((error) =>
                    of({
                        type: PokemonAction.TOP_TEN_POKEMONS_GET_FAIL,
                        payload: error
                    })
                )
            )
        )
    );

const pokemonVoteEpic: Epic<any> = ($actions, $state) =>
    $actions.pipe(
        ofType(PokemonAction.VOTE_FOR_POKEMON),
        map(x => x.payload),
        mergeMap((id: number) =>
            voteForPokemon(id).pipe(
                mergeMap(async () => {
                    return {
                        type: PokemonAction.RANDOM_POKEMONS_GET
                    };
                }),
                catchError((error) =>
                    of({
                        type: PokemonAction.VOTE_FOR_POKEMON_FAIL,
                        payload: error
                    })
                )
            )
        )
    );

const resetPokemonVotesEpic: Epic<any> = ($actions, $state) =>
    $actions.pipe(
        ofType(PokemonAction.RESET_POKEMON_VOTES),
        mergeMap(() =>
            resetPokemonVotes().pipe(
                mergeMap(async () => {
                    return {
                        type: PokemonAction.RANDOM_POKEMONS_GET
                    };
                }),
                catchError((error) =>
                    of({
                        type: PokemonAction.RESET_POKEMON_VOTES_FAIL,
                        payload: error
                    })
                )
            )
        )
    );
const epics = [randomPokemonsGetEpic, topTenPokemonsGetEpic, pokemonVoteEpic, resetPokemonVotesEpic];
export default epics;