import React from 'react';


const GameSetup = props => {

    return (
        <div >
            {props.gameSetup &&
            <div>
                <div className="setup">

                    <div className="setup-option player-select">
                        <div>Players</div>
                        <select  id="players" onChange={props.addPlayers}>
                            <option value="1">1 Player</option>
                            <option value="2">2 Players</option>
                            <option value="3">3 Players</option>
                            <option value="4">4 Players</option>
                        </select>
                    </div>

                    <div className="setup-option center">
                        <div>QUESTIONS</div>
                        <div  id="setup-questions">
                            <button className="question-button" onClick={props.subtractQuestions}>-</button>
                            <div>{props.gameQuestionCount}</div>
                            <button className="question-button" onClick={props.addQuestions}>+</button>

                        </div>
                    </div>

                    <button className="setup-option" id="start-button" onClick={props.startGame}>Start Game</button>
                </div>
                
                <div className="error-section">
                    {props.gameQuestionCountError !== undefined ? 
                        <div className="error">
                            <div> {props.gameQuestionCountError} </div>
                        </div> : <div/>
                    }
                </div>

                <div className="bar-lg"/>

                <div className="how-to-play">
                    <h1 className="how-to-play-title"> HOW TO PLAY</h1>
                    {/* <div className="bar-small"/> */} 
                    <div className="how-to-play-content">
                        <div className="how-to-play-section">
                            <div className="how-to-play-subtitle">SETUP</div>
                            <div>Select how many players will be participating and how many rounds of questions you would like to answer. </div>
                        </div>
                        <div className="how-to-play-section">
                            <div className="how-to-play-subtitle">ROUND PLAY</div>
                            <div>After starting the game, ask the question and start the timer. Select which users got the answer correct below the question card then move to the next round.  </div>
                        </div>
                        <div className="how-to-play-section">
                            <div className="how-to-play-subtitle">SCORING</div>
                            <div>Each question is weighted depending on its difficulty. At the end of the game the points will be tallied to display the winner.   </div>
                        </div>

                        <div className="how-to-play-section how-to-play-subtitle">Good luck! </div>
                    </div>

                </div>

            </div>
            }
        </div>
    )
}

export default GameSetup;