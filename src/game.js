import React from "react"
import Card from "./card"
import shuffle from "./shuffle"
import ResetButton from "./resetbutton"
import GameOver from "./gameover"
import Counter from "./counter"

const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg",
  "/images/dog-6.jpg"
]

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.duplicatedAndShuffledCards(),
      flippedCards: [],
      gameIsOver: false,
      clicks: 0
    }
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )

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
    const cards = this.state.cards.filter(card => card.item !== this.state.flippedCards[0].photo)
    if(cards.length === 0){
      this.setState({ gameIsOver: true })
    }
    this.setState({ cards, flippedCards: [] })
  }

  handleFlippedMisMatch = () => {
    this.state.flippedCards.forEach(card => {
      card.unFlipCallBack()
    })
    this.setState({ flippedCards: [] })
  }

  resetGame = () => {
    this.setState({cards: this.duplicatedAndShuffledCards(), flippedCards: [], gameIsOver: false, clicks: 0})
  }

  renderCards = () => (
    this.state.cards.map(card => (
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
