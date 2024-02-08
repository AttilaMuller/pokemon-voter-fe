import { defer, map, Observable } from "rxjs";
import { Pokemon } from "../../models/PokemonModel";
import http from "../../config/axios/axios.setup";

export const getRandomPokemons = (): Observable<Pokemon[]> => {
    return defer(() => http.get('random-pokemons')).pipe(
        map((result: any) => result.data)
    );
};

export const getTopTenPokemons = (): Observable<Pokemon[]> => {
    return defer(() => http.get('top-ten-pokemons')).pipe(
        map((result: any) => result.data)
    );
};

export const voteForPokemon = (id: number): Observable<Pokemon> => {
    return defer(() => http.post('vote', { pokemonId: id })).pipe(
      map((result: any) => result.data)
    );
};

export const resetPokemonVotes = (): Observable<void> => {
    return defer(() => http.post('reset-votes')).pipe(
      map((result: any) => result.data)
    );
};