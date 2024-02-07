import { defer, map, Observable } from "rxjs";
import http from "../../config/axios/axios.setup";
import { Pokemon } from "../../models/PokemonModel";

export const getRandomPokemons = (): Observable<Pokemon[]> => {
    return defer(() => http.get('random-pokemons')).pipe(
        map((result: any) => result.data)
    );
};