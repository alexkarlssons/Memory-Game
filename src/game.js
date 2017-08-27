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
      if(this.state.flippedCards[0].photo === this.state.flippedCards[1].photo){
        this.setState({flippedCards: []})
      }else{
        setTimeout(() => {
          this.state.flippedCards.forEach(card => {
            card.unFlipCallBack()
          })
          this.setState({flippedCards: []})
        }, 1000)
      }
    }
  }

  render() {
    return (
      <div className="game-body">
        <div className="card-container">
        {this.state.cards.map(card => (
          <Card
          canFlip={this.state.flippedCards.length < 2}
          onFlip={this.handleCardFlip}
          image={card.item}
          key={card.idCounter}/>
        ))}
        </div>

        <div className="side-panel">
        </div>
      </div>
    )
  }

}

export default Game
