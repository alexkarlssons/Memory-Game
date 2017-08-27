import React from "react"
import Card from "./card"
import ResetButton from "./resetbutton"
import GameOver from "./gameover"
import Counter from "./counter"
import { inject } from "mobx-react"

@inject("cardsStore")
class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      flippedCards: [],
      gameIsOver: false,
      clicks: 0
    }
  }



  handleCardFlip = (photo, id, unFlipCallBack) => {
    const flippedCards = [...this.state.flippedCards, { photo, unFlipCallBack, id }]
    this.setState({clicks: this.state.clicks += 1})
    this.setState({ flippedCards }, this.handleFlippedCardChange)
  }

  handleFlippedCardChange = () => {
    if (this.state.flippedCards.length === 2) {
      setTimeout(() => {
        if (this.state.flippedCards[0].photo === this.state.flippedCards[1].photo) {
          this.handleFlippedMatch()
        } else {
          this.handleFlippedMisMatch()
        }
      }, 500)
    }
  }

  handleFlippedMatch = () => {
    const cards = this.props.cardsStore.cards.filter(card => card.item !== this.state.flippedCards[0].photo)
    if(cards.length === 0){
      this.setState({ gameIsOver: true })
    }
    this.props.cardsStore.setCards(cards)
    this.setState({ flippedCards: [] })
  }

  handleFlippedMisMatch = () => {
    this.state.flippedCards.forEach(card => {
      card.unFlipCallBack()
    })
    this.setState({ flippedCards: [] })
  }

  resetGame = () => {
    this.props.cardsStore.resetCards()
    this.setState({flippedCards: [], gameIsOver: false, clicks: 0})
  }

  renderCards = () => (
    this.props.cardsStore.cards.map(card => (
      <Card
      canFlip={this.state.flippedCards.length < 2}
      onFlip={this.handleCardFlip}
      image={card.item}
      id={card.id}
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
          {this.state.gameIsOver? this.renderGameOver():this.renderCards()}
        </div>

        <div className="side-panel">
          <Counter clicks={this.state.clicks}/>
          <ResetButton onReset={this.resetGame}/>
        </div>
      </div>
    )
  }

}

export default Game
