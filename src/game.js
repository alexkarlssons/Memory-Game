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
      flippedCards: [],
      counter: 0
    }
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )

  handleCardFlip = photo => {
    console.log(photo)
  }

  render() {
    return (
      <div className="game-body">
        <div className="card-container">
        {this.state.cards.map(card => (
          <Card onFlip={this.handleCardFlip} key={this.state.counter++} image={card}/>
        ))}
        </div>

        <div className="side-panel">
        </div>
      </div>
    )
  }

}

export default Game
