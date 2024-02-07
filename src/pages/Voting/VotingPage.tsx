import React from 'react';
import { Card } from '../../components/Card/Card';
import './VotingPage.scss';

export const VotingPage = () => {
    return (
        <div className='voting-page'>
            <Card/>
            <div className='voting-page-vs'>
                <span>VS</span>
            </div>
            <Card/>
        </div>
    )
}