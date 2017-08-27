import React from "react"
import Card from "./card"
import ResetButton from "./resetbutton"
import GameOver from "./gameover"
import Counter from "./counter"
import { inject, observer } from "mobx-react"

@inject("gameStore") @observer
class Game extends React.Component {

  constructor(props) {
    super(props)
  }

  resetGame = () => {
    this.props.gameStore.resetGame()
  }

  renderCards = () => (
    this.props.gameStore.cards.map(card => (
      <Card
      card={card}
      key={card.id}/>
    ))
  )

  renderGameOver = () => (
    <GameOver />
  )

  render() {
    return (
      <div className="game-body">
        <div className="card-container">
          {this.props.gameStore.gameIsOver? this.renderGameOver():this.renderCards()}
        </div>

        <div className="side-panel">
          <Counter clicks={this.props.gameStore.clicks}/>
          <ResetButton onReset={this.resetGame}/>
        </div>
      </div>
    )
  }

}

export default Game
