import React from 'react';



const FinalScore = (props) =>  {
    return (
        <div>
            {props.gameOver &&
            <div className="card-container">
                <div className="card">
                <div>GAME OVER!</div>
                <div>Final Score</div>
                    {props.finalScore}
                </div>
            </div>
            }
        </div>
    )
}


export default FinalScore