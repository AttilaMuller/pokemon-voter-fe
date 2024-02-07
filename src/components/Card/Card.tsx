import React from 'react';
import './Card.scss';

export const Card = () => {
    return (
        <div className='card'>
            <div>
                <span className='card-title'>Pokemon name</span>
                <span className='card-title-votes'>12</span>
            </div>
            <img className='card-image' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' />
            <div className='card-types'>
                <span className='card-static-button'>Type 1</span>
                <span className='card-static-button'>Type 2</span>
            </div>
            <div className='card-abilities'>
                <span className='card-static-button'>Ability 1</span>
                <span className='card-static-button'>Ability 2</span>
                <span className='card-static-button'>Ability 3</span>
            </div>
        </div>
    )
}