import React from 'react';
import './App.scss';


import GameSetup from './Components/GameSetup';
import Scoreboard from './Components/Scoreboard'
import QuestionCard from './Components/QuestionCard'
import FinalScore from './Components/FinalScore'
import PlayAgain from './Components/PlayAgain'
import ScoreAdder from './Components/ScoreAdder'
import Reset from './Components/Reset'
import Footer from './Components/Footer'

const styles = {

  show: {
    display: "block"
  },

  hide: {
    display: "none"
  }

}


class App extends React.Component {

  state = {
    //Game Setup
    gameQuestionCount: 10,
    gameQuestionCountError: undefined,
    gameCategory: 'random',
    gameDifficulty: 10,
    players: document.getElementById("players"),

    //players active
    player1: true,
    player2: false,
    player3: false,
    player4: false,

    //Names
    p1Name: undefined,
    p2Name: undefined,
    p3Name: undefined,
    p4Name: undefined,

    //scoreboard;
    p1Score: 0,
    p2Score: 0,
    p3Score: 0,
    p4Score: 0,
    p1TempScore: 0,
    p2TempScore: 0,
    p3TempScore: 0,
    p4TempScore: 0,
    questionsLeft: undefined,
    playerData: [

    ],
    finalScore: [],

    //GameState
    gameStarted: false,
    currentQuestion: 1,
    arrQuestion: 0,
    gameSetup: true,
    gameOver: false,

    //Question Info
    data: undefined,
    questions: undefined,
    answers: undefined,
    totalQuestions: 5,
    questionValue: undefined,
    questionCategory: undefined,
    questionDate: undefined,

    //UI
    toggle: false,
    questionUI: styles.show,
    answerUI: styles.hide
  }


  //add # of game questions
  addQuestions = () => {
    this.state.gameQuestionCount < 100  ? this.setState({
      gameQuestionCount: this.state.gameQuestionCount + 5,
      gameQuestionCountError: undefined,
    }) : this.setState({gameQuestionCountError: "Max question amount 100 questions"})
  }

  //subtract # of game questions
  subtractQuestions = () => {
    this.state.gameQuestionCount > 5 ? this.setState({
      gameQuestionCount: this.state.gameQuestionCount - 5,
      gameQuestionCountError: undefined,
    }) : this.setState({gameQuestionCountError: "Minimum question amount 5 questions"})
  }

  //start game
  startGame = async () => {
    const questionCount = this.state.gameQuestionCount + 1
    const APIcall = await fetch (`http://jservice.io/api/random?count=${questionCount}`)
    const data = await APIcall.json()

    await this.setState({
      gameStarted: true,
      data: data,
      totalQuestions: data.length,
      gameSetup: false,
      gameOver: false,
      playerData: [],
      finalScore: [],
    })
  }

  //go to next questions
  nextQuestion = async () => {
    //increment questions
    await this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      arrQuestion: this.state.arrQuestion + 1,
    })

    //check if game is over
    if (this.state.currentQuestion == this.state.totalQuestions) {
      this.endGame()
    }
    //add scores to total
    this.addToScore()
    //reset Temp Score to zero

    if (this.state.gameOver === false) {
      await this.resetTempScore()
      //show quesion
      await this.setState({
        questionUI: styles.show,
        answerUI: styles.hide
      })
    }
  }

  //toggle between question and answer
  toggleQuestion = async () => {
    this.state.toggle === false ? await this.setState({toggle: true}) : await this.setState({toggle: false})

    await this.state.toggle === true ? await this.setState({
      questionUI: styles.hide,
      answerUI: styles.show
    }) : await this.setState({
      questionUI: styles.show,
      answerUI: styles.hide
    })
  }

  //change the number of players
  addPlayers = async (event) => {
    const players = event.target.value;
    if (players == 1) {
      await this.setState({
        player1: true,
        player2: false,
        player3: false,
        player4: false
      }) 
    }

    if (players == 2) {
      await this.setState({
        player1: true,
        player2: true,
        player3: false,
        player4: false
      })
    }

    if (players == 3) {
      await this.setState({
        player1: true,
        player2: true,
        player3: true,
        player4: false
      })
    }

    if (players == 4) {
      await this.setState({
        player1: true,
        player2: true,
        player3: true,
        player4: true
      })
    }
  }

  //add current questiont to temp score
  addToTempScore = async(event) => {
    const id = event.target.id
    const checked = event.target.checked
    const tempScore = parseInt(event.target.value)

    if(checked && id === "p1-check") {
      await this.setState({
        p1TempScore: tempScore
      })
      document.getElementById("p1ScoreAdder" ).classList.add('p1-correct')
    }

    if(checked && id === "p2-check") {
      await this.setState({
        p2TempScore: tempScore
      })
      document.getElementById("p2ScoreAdder" ).classList.add('p2-correct')
    } 

    if(checked && id === "p3-check") {
      await this.setState({
        p3TempScore: tempScore
      })
      document.getElementById("p3ScoreAdder" ).classList.add('p3-correct')
    }

    if(checked && id === "p4-check") {
      await this.setState({
        p4TempScore: tempScore
      })
      document.getElementById("p4ScoreAdder" ).classList.add('p4-correct')
    }

    if(checked === false && id === "p1-check") {
      await this.setState({
        p1TempScore: 0
      })
      document.getElementById("p1ScoreAdder" ).classList.remove('p1-correct')
    }

    if(checked === false && id === "p2-check") {
      await this.setState({
        p2TempScore: 0
      })
      document.getElementById("p2ScoreAdder" ).classList.remove('p2-correct')
    }

    if(checked === false && id === "p3-check") {
      await this.setState({
        p3TempScore: 0
      })
      document.getElementById("p3ScoreAdder" ).classList.remove('p3-correct')

    }
    if(checked === false && id === "p4-check") {
      await this.setState({
        p4TempScore: 0
      })
      document.getElementById("p4ScoreAdder" ).classList.remove('p4-correct')

    }
  }

  //reset the temp score
  resetTempScore = async () => {
    await this.setState({
      p1TempScore: 0,
      p2TempScore: 0,
      p3TempScore: 0,
      p4TempScore: 0,
    })

    document.getElementById("p1-check").checked = false
    document.getElementById("p2-check").checked = false
    document.getElementById("p3-check").checked = false
    document.getElementById("p4-check").checked = false

    if (this.state.player1) {
      document.getElementById("p1ScoreAdder" ).classList.remove('p1-correct')
    }

    if (this.state.player2) {
      document.getElementById("p2ScoreAdder" ).classList.remove('p2-correct')
    }

    if (this.state.player3) {
      document.getElementById("p3ScoreAdder" ).classList.remove('p3-correct')
    }

    if (this.state.player4) {
      document.getElementById("p4ScoreAdder" ).classList.remove('p4-correct')
    }
  }

  //add temp score to total score
  addToScore = async() => {
    await this.setState({
      p1Score: this.state.p1Score + this.state.p1TempScore,
      p2Score: this.state.p2Score + this.state.p2TempScore,
      p3Score: this.state.p3Score + this.state.p3TempScore,
      p4Score: this.state.p4Score + this.state.p4TempScore,
    })
  }

  //reset game to init setting
  resetGame = async () => {
    await this.setState({
      //Game Setup
      gameQuestionCount: 10,
      gameQuestionCountError: undefined,
      gameCategory: 'random',
      gameDifficulty: 10,
      players: document.getElementById("players"),

      //players active
      player1: true,
      player2: false,
      player3: false,
      player4: false,

      //scoreboard;
      p1Score: 0,
      p2Score: 0,
      p3Score: 0,
      p4Score: 0,
      p1TempScore: 0,
      p2TempScore: 0,
      p3TempScore: 0,
      p4TempScore: 0,
      questionsLeft: undefined,
      playerData: [],
      finalScore: [],

      //GameState
      gameStarted: false,
      currentQuestion: 1,
      arrQuestion: 0,
      gameSetup: true,
      gameOver: false,
    })
  }

  endGame = async () => {
    
    const addPlayerToArr = (playerName, playerScore) => {
      this.state.playerData.push({
        "name": playerName,
        "score": playerScore,
      })
    }

    if (this.state.player1) {
      addPlayerToArr("Player 1", this.state.p1Score)
    }

    if (this.state.player2) {
      addPlayerToArr("Player 2", this.state.p2Score)
    }

    if (this.state.player3) {
      addPlayerToArr("Player 3", this.state.p3Score)
    }

    if (this.state.player4) {
      addPlayerToArr("Player 4", this.state.p4Score)
    }

    await this.setState({
      gameOver: true,
      finalScore: this.state.playerData.map((i, index) => (
        <div>
          <div className="finalScore" kye={index}>
            {i.name} : {i.score}
          </div>
        </div>
      ))
    })
  }

  playAgain = async () => {

    this.startGame()

    this.setState({
      //scoreboard;
      p1Score: 0,
      p2Score: 0,
      p3Score: 0,
      p4Score: 0,
      p1TempScore: 0,
      p2TempScore: 0,
      p3TempScore: 0,
      p4TempScore: 0,
      questionsLeft: undefined,
      playerData: [],
      finalScore: [],

      //GameState
      gameStarted: false,
      currentQuestion: 1,
      arrQuestion: 0,
      gameSetup: true,
    })

  }

  render() {
    return (
      <div className="App">

        <div className="title-container">
          <div className="bar-container">
            <div className="bar"/>
          </div>
          <div className="title">
            <div className="flicker-fast"> NEON </div>
            <div className="flicker-slow"> TRIVIA</div>
          </div>
          <div className="bar-container">
            <div className="bar"/>
          </div>
        </div>


        <GameSetup
          //GamState
          startGame={this.startGame}
          gameSetup={this.state.gameSetup}
          gameStarted={this.state.gameStarted}
          //GameSetup
          gameQuestionCount={this.state.gameQuestionCount}
          gameQuestionCountError={this.state.gameQuestionCountError}
          addQuestions={this.addQuestions}
          subtractQuestions={this.subtractQuestions}
          addPlayers={this.addPlayers}
        />
        
        <Scoreboard
          //Game State
          gameStarted={this.state.gameStarted}

          players={this.state.players}
          player1={this.state.player1}
          player2={this.state.player2}
          player3={this.state.player3}
          player4={this.state.player4}
          p1Score={this.state.p1Score}
          p2Score={this.state.p2Score}
          p3Score={this.state.p3Score}
          p4Score={this.state.p4Score}

        />

        <QuestionCard
          //Question Data
          data={this.state.data}

          //Game State
          gameStarted={this.state.gameStarted}
          currentQuestion={this.state.currentQuestion}
          arrQuestion={this.state.arrQuestion}
          gameOver={this.state.gameOver}

          //controls
          nextQuestion={this.nextQuestion}

          //UI
          toggleQuestion={this.toggleQuestion}
          questionUI={this.state.questionUI}
          answerUI={this.state.answerUI}
        />

        <ScoreAdder
          //question data
          data={this.state.data}

          //Game State
          gameStarted={this.state.gameStarted}
          arrQuestion={this.state.arrQuestion}
          gameOver={this.state.gameOver}

          //players
          player1={this.state.player1}
          player2={this.state.player2}
          player3={this.state.player3}
          player4={this.state.player4}
          p1TempScore={this.state.p1TempScore}
          p2TempScore={this.state.p2TempScore}
          p3TempScore={this.state.p3TempScore}
          p4TempScore={this.state.p4TempScore}

          nextQuestion={this.nextQuestion}

          addToTempScore={this.addToTempScore}
        />
        <FinalScore
          gameOver={this.state.gameOver}
          finalScore={this.state.finalScore}
        />

        <Reset
          resetGame={this.resetGame}
          gameStarted={this.state.gameStarted}
          gameOver={this.state.gameOver}
        />

        <PlayAgain
          gameOver={this.state.gameOver}
          playAgain={this.playAgain}
        />

        <Footer/>



      </div>
    )
  }
}

export default App;
