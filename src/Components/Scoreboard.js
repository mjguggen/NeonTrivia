import React, { isValidElement } from 'react'

const Scoreboard = props => {

    return (
        <div >
            {props.gameStarted && 
                <div className="scoreboard">
                    <h2>Scoreboard</h2>
                    <div className="scores">
                        {props.player1 &&
                            <div className="score" id="score-p1">
                                <div className="score-player-name" id="score-p1-name"> Player 1 </div> 
                                <div className="score-player-num" id="score-p1-score">{props.p1Score} </div> 
                            </div>
                        }

                        {props.player2 &&
                            <div className="score" id="score-p2">
                                <div className="score-player-name" id="score-p2-name"> Player 2 </div> 
                                <div className="score-player-num" id="score-p2-score">{props.p2Score} </div> 
                            </div>
                        }

                        {props.player3 &&
                            <div className="score" id="score-p3">
                                <div className="score-player-name" id="score-p3-name"> Player 3 </div> 
                                <div className="score-player-num" id="score-p3-score">{props.p3Score} </div> 
                            </div>
                        }

                        {props.player4 &&
                            <div className="score" id="score-p4">
                                <div className="score-player-name" id="score-p4-name"> Player 4 </div> 
                                <div className="score-player-num" id="score-p4-score">{props.p4Score} </div> 
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Scoreboard