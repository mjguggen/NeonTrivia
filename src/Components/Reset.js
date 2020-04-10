import React from 'react';


const Reset = props => {



    return (
        <div >
            {props.gameStarted &&
            <button className="reset" onClick={props.resetGame}>Reset Game</button>
            }
        </div>
    )
}

export default Reset