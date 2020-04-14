import React from 'react';


const Reset = props => {



    return (
        <div >
            {props.gameStarted == true & props.gameOver === false ? 
            <button className="reset" onClick={props.resetGame}>Reset Game</button> : <div/>
            }
        </div>
    )
}

export default Reset