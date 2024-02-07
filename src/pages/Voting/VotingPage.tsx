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
        if (!pokemons) {
            dispatch(randomPokemonsGetAction());
        }
    }, [dispatch]);

    if (!pokemons) {
        return (<div></div>)
    }

    return (
        <div className='voting-page'>
            <Card
                id={pokemons[0].id}
                name={pokemons[0].name}
                imageUrl={pokemons[0].imageUrl}
                votes={pokemons[0].votes}
                types={pokemons[0].types}
                abilities={pokemons[0].abilities}
                interactive
            />
            <div className='voting-page-vs'>
                <span>VS</span>
            </div>
            <Card
                id={pokemons[1].id}
                name={pokemons[1].name}
                imageUrl={pokemons[1].imageUrl}
                votes={pokemons[1].votes}
                types={pokemons[1].types}
                abilities={pokemons[1].abilities}
                interactive
            />
        </div>
    )
}