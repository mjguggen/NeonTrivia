import React from 'react'


const ScoreAdder = props => {




    return (
        <div>
            {props.gameStarted && props.gameOver === false ?
                <div className="scoreAdder">
                    <div className="scoreAdder-container">
                    <div className="scoreAdder-title">Who got it right?</div>
                    </div>

                    <div className="scoreAdder-playerBox">
                        <input type="checkbox" id="p1-check" value={props.data[props.arrQuestion].value} onChange={props.addToTempScore} /> 
                        <input type="checkbox" id="p2-check" value={props.data[props.arrQuestion].value} onChange={props.addToTempScore} /> 
                        <input type="checkbox" id="p3-check" value={props.data[props.arrQuestion].value}onChange={props.addToTempScore}/> 
                        <input type="checkbox" id="p4-check" value={props.data[props.arrQuestion].value}onChange={props.addToTempScore}/>

                        {props.player1 && <label className="scoreAdder-label p1-incorrect" id="p1ScoreAdder"  for="p1-check"  >Player1</label> }
                        {props.player2 && <label className="scoreAdder-label p2-incorrect" id="p2ScoreAdder" for="p2-check">Player2</label> }
                        {props.player3 && <label className="scoreAdder-label p3-incorrect" id="p3ScoreAdder" for="p3-check">Player3</label> }
                        {props.player4 && <label className="scoreAdder-label p4-incorrect" id="p4ScoreAdder" for="p4-check">Player4</label> }
                    </div>
                
                <div className="scoreAdder-container">
                    <button className="next-question" onClick={props.nextQuestion}>
                        <div>Next Question</div>
                        <img className="arrow-icon" src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png"/>
                    </button> 
                </div>




                    
                </div> : <div/>
            } 
        </div>
    )
}

export default ScoreAdder