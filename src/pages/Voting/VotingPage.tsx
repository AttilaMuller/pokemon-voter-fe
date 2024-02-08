import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import "./VotingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { randomPokemonsGetAction, resetPokemonVotesAction } from "../../store/pokemon/PokemonAction";
import { PokemonActionType } from "../../store/pokemon/PokemonTypes";
import { Dispatch } from "redux";

export const VotingPage = () => {
    const pokemons = useSelector((state: AppState) => state.pokemon.randomPokemons);
    const loading = useSelector((state: AppState) => state.pokemon.loading);
    const dispatch = useDispatch<Dispatch<PokemonActionType>>();

    useEffect(() => {
        if (!pokemons) {
            dispatch(randomPokemonsGetAction());
        }
    }, [dispatch, pokemons]);

    const resetVotes = () => {
        if (loading) {
            return;
        }
        dispatch(resetPokemonVotesAction());
    }

    if (!pokemons || loading) {
        return (<div><img src='https://i.gifer.com/5Q0v.gif' alt=''/></div>)
    }

    return (
        <div className='voting-page'>
            <div className='voting-page-voting-wrapper'>
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
            <div className='voting-page-button-wrapper'>
                <button className='voting-page-button' onClick={resetVotes}>
                    Reset votes
                </button>
            </div>
        </div>
    )
}