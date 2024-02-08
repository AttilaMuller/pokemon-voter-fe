import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import "./TopTenPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { Dispatch } from "redux";
import { PokemonActionType } from "../../store/pokemon/PokemonTypes";
import { topTenPokemonsGetAction } from "../../store/pokemon/PokemonAction";

export const TopTenPage = () => {
    const pokemons = useSelector((state: AppState) => state.pokemon.topTenPokemons);
    const loading = useSelector((state: AppState) => state.pokemon.loading);
    const dispatch = useDispatch<Dispatch<PokemonActionType>>();

    useEffect(() => {
        dispatch(topTenPokemonsGetAction());
    }, [dispatch]);

    const mapPokemons = () => pokemons!.map(pokemon => (
        <Card
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            abilities={pokemon.abilities}
            types={pokemon.types}
            votes={pokemon.votes}
        />
    ));

    if (!pokemons || loading) {
        return (<div><img src='https://i.gifer.com/5Q0v.gif' alt=''/></div>)
    }

    return (
        <div className='top-ten-page'>
            <div className='top-ten-page-card-wrapper'>
                {mapPokemons()}
            </div>
        </div>
    )
}