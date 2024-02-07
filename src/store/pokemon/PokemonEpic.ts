import { Epic, ofType } from "redux-observable";
import { catchError } from "rxjs/operators";
import { mergeMap, of, map } from "rxjs";
import { PokemonAction } from "./PokemonTypes";
import { getRandomPokemons } from "./PokemonService";
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
                        payload: error.message,
                        error: true,
                    })
                )
            )
        )
    );

export default [randomPokemonsGetEpic];