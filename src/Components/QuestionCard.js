import React from 'react'






const QuestionCard = props => {

    const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    


    return (
        <div>



            {props.gameStarted === true && props.gameOver === false ?
                <div>
                    <input type="button" id="questionCard-checkbox" name="questionCard-checkbox" onClick={props.toggleQuestion}/>
                    <label for="questionCard-checkbox" className="card-label" id="check" onChange={props.toggleQuestion}>
                            <div className="card-container">
                                    <div className="card">
                                        <div className="question-card-top">
                                            <div id="question-num"> Question: {props.currentQuestion} </div>
                                            <div id="question-value"> Value: {props.data[props.arrQuestion].value} </div>
                                        </div>    

                                        {/* 
                                        <div> Originally Asked: {props.data[props.arrQuestion].airdate.slice(0,4)} </div>
                                        */}

                                        <div className="qa-box question" style={props.questionUI} > 
                                            <div className="qa"> Question:</div>
                                            <div className="qa-text" > {toTitleCase(props.data[props.arrQuestion].question.replace(/<[^>]+\>/g, ''))} </div>
                                        </div>

                                        <div className="qa-box answer" style={props.answerUI}> 
                                            <div className="qa"> Answer: </div>
                                            <div className="qa-text" > {toTitleCase(props.data[props.arrQuestion].answer.replace(/<[^>]+\>/g, ''))} </div>
                                        </div>

                                        <div className="question-card-bottom">
                                            <div id="question-category"> Category: {toTitleCase(props.data[props.arrQuestion].category.title.replace(/<[^>]+\>/g, ''))} </div>

                                            <div className="card-flip" >
                                                <img className="flip-icon" style={props.questionUI} src="https://cdn.iconscout.com/icon/free/png-256/flip-1767771-1502351.png"/>
                                                <div className="flip-text" style={props.questionUI}>Tap to see answer</div>
                                            </div>

                                            <div className="card-flip" >
                                                <img className="flip-icon" style={props.answerUI} src="https://cdn.iconscout.com/icon/free/png-256/flip-1767771-1502351.png"/>
                                                <div className="flip-text" style={props.answerUI}>Tap to see question</div>
                                            </div>



                                        </div>

                                    </div>
                            </div>

                        {/* 
                        <div>

                            Game Over!

                        </div>
                        */}
                    </label>
            </div> : <div/>
            }
        </div>
    )

}



export default QuestionCard;