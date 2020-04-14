import React from 'react';


const PlayAgain = props => {
    return (
        <div>
            {props.gameOver &&
            <button className="play-again" onClick={props.playAgain}>Play Again</button>
            }
        </div>
    )
}

export default PlayAgain