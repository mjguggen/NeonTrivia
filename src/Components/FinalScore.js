import React from 'react';



const FinalScore = (props) =>  {
    return (
        <div>
            {props.gameOver &&
            <div className="card-container">
                <div className="card final-score">
                    <div className="final-score-title">GAME OVER!</div>
                    <div>Final Score</div>
                        {props.finalScore}
                </div>
            </div>
            }
        </div>
    )
}

export default FinalScore