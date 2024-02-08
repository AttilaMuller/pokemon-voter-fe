import React from "react";
import "./Card.scss";
import { Pokemon } from "../../models/PokemonModel";
import { voteForPokemonAction } from "../../store/pokemon/PokemonAction";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { PokemonActionType } from "../../store/pokemon/PokemonTypes";

interface Props extends Pokemon {
    interactive?: boolean;
}

export const Card = ({ id, name, imageUrl, votes, types, abilities, interactive }: Props) => {
    const mapTypes = () => types.map(type => (
        <span className='card-static-button'>{type}</span>
    ));

    const mapAbilities = () => abilities.map(ability => (
        <span className='card-static-button card-static-button-small'>{ability}</span>
    ));

    const dispatch = useDispatch<Dispatch<PokemonActionType>>();

    const voteForPokemon = () => {
        dispatch(voteForPokemonAction(id));
    }

    if (interactive) {
        return (
            <div className='card card-interactive' onClick={voteForPokemon}>
            <div>
                <span className='card-title'>{name}</span>
                <span className='card-title-votes'>{votes}</span>
            </div>
            <img className='card-image' src={imageUrl} alt='card' />
            <div className='card-types'>
                {mapTypes()}
            </div>
            <div className='card-abilities'>
                {mapAbilities()}
            </div>
        </div>
        )
    }

    return (
        <div className='card'>
            <div>
                <span className='card-title'>{name}</span>
                <span className='card-title-votes'>{votes}</span>
            </div>
            <img className='card-image' src={imageUrl} alt='card' />
            <div className='card-types'>
                {mapTypes()}
            </div>
            <div className='card-abilities'>
                {mapAbilities()}
            </div>
        </div>
    )
}