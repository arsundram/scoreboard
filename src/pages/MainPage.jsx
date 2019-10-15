import React from 'react';
import ScoreCard from '../component/ScoreCard'

export default class MainPage extends React.Component {
    render() {
        return(
            <div className='page'>
                <h1>Scoreboard</h1>
                <ScoreCard/>
                <ScoreCard/>
            </div>
        )
    }
}