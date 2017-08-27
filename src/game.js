import React from "react"
import Card from "./card"
import shuffle from "./shuffle"

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
      flippedCards: []
    }
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )

  handleCardFlip = (photo, unFlipCallBack) => {
    const flippedCards = [...this.state.flippedCards, { photo, unFlipCallBack }]
    this.setState({ flippedCards }, this.handleFlippedCardChange)
  }

  handleFlippedCardChange = () => {
    if(this.state.flippedCards.length === 2){
      setTimeout(() => {
        this.state.flippedCards.forEach(card => {
          card.unFlipCallBack()
        })
      }, 1000)

    }
  }

  render() {
    return (
      <div className="game-body">
        <div className="card-container">
        {this.state.cards.map(card => (
          <Card
          canFlip={this.state.flippedCards && this.state.flippedCards.length < 2}
          onFlip={this.handleCardFlip}
          image={card}/>
        ))}
        </div>

        <div className="side-panel">
        </div>
      </div>
    )
  }

}

export default Game
