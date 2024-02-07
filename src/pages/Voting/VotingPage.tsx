import React, { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import './VotingPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { randomPokemonsGetAction } from '../../store/pokemon/PokemonAction';
import { PokemonActionType } from '../../store/pokemon/PokemonTypes';
import { Dispatch } from 'redux';

export const VotingPage = () => {
    const pokemons = useSelector((state: AppState) => state.pokemon.randomPokemons);
    const dispatch = useDispatch<Dispatch<PokemonActionType>>();

    useEffect(() => {
        dispatch(randomPokemonsGetAction());
    }, [dispatch]);

    return (
        <div className='voting-page'>
            <Card />
            <div className='voting-page-vs'>
                <span>VS</span>
            </div>
            <Card />
        </div>
    )
}