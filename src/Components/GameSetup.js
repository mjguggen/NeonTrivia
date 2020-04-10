import React from 'react';


const GameSetup = props => {

    return (
        <div >
            {props.gameSetup &&
            <div className="setup">

                <div className="setup-option">
                    <div>Select Players</div>
                    <select  id="players" onChange={props.addPlayers}>
                        <option value="1">1 Player</option>
                        <option value="2">2 Players</option>
                        <option value="3">3 Players</option>
                        <option value="4">4 Players</option>
                    </select>
                </div>

                <div className="setup-option center">
                    <div>SELECT QUESTIONS</div>
                    <div  id="setup-questions">
                        <button className="question-button" onClick={props.subtractQuestions}>-</button>
                        <div>{props.gameQuestionCount}</div>
                        <button className="question-button" onClick={props.addQuestions}>+</button>
                        {props.gameQuestionCountError !== undefined ? 
                            <div> {props.gameQuestionCountError} </div> : <div/>
                        }
                    </div>
                </div>

                <button className="setup-option" id="start-button" onClick={props.startGame}>Start Game</button>

            </div>
            }
        </div>
    )
}

export default GameSetup;