import React from 'react';
import './Card.scss';
import { Pokemon } from '../../models/PokemonModel';

export const Card = ({ id, name, imageUrl, votes, types, abilities }: Pokemon) => {
    const mapTypes = () => types.map(type => (
        <span className='card-static-button'>{type}</span>
    ));

    const mapAbilities = () => abilities.map(ability => (
        <span className='card-static-button card-static-button-small'>{ability}</span>
    ));
    return (
        <div className='card'>
            <div>
                <span className='card-title'>{name}</span>
                <span className='card-title-votes'>{votes}</span>
            </div>
            <img className='card-image' src={imageUrl} />
            <div className='card-types'>
                {mapTypes()}
            </div>
            <div className='card-abilities'>
                {mapAbilities()}
            </div>
        </div>
    )
}