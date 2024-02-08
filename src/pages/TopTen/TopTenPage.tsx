import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { Dispatch } from 'redux';
import { PokemonActionType } from '../../store/pokemon/PokemonTypes';
import { topTenPokemonsGetAction } from '../../store/pokemon/PokemonAction';

export const TopTenPage = () => {
    const pokemons = useSelector((state: AppState) => state.pokemon.topTenPokemons);
    const dispatch = useDispatch<Dispatch<PokemonActionType>>();

    useEffect(() => {
        if (!pokemons) {
            dispatch(topTenPokemonsGetAction());
        }
    }, [dispatch]);

    if (!pokemons) {
        return (<div></div>)
    }

    return (
        <div>
            <p>This is the TopTenPage component</p>
        </div>
    )
}