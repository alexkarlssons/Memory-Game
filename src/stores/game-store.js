import { observable, action } from "mobx"
import uuid from "uuid/v4"

import shuffle from "../shuffle"

const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg",
  "/images/dog-6.jpg"
]

class Card {
  id
  photo
  @observable flipped = false

  constructor(photo) {
    this.photo = photo
    this.id = uuid()
  }

  @action flip() {
    this.flipped = !this.flipped
  }
}

class GameStore {
  @observable cards = []
  @observable flippedCards = []
  @observable gameIsOver = false
  @observable clicks = 0

  constructor() {
    this.resetDeck()
  }

  @action flip(card) {
    card.flip()
    this.flippedCards.push(card)
    this.clicks += 1

    if (this.flippedCards.length === 2) {
      setTimeout(() => {
        if (this.flippedCards[0].photo === this.flippedCards[1].photo) {
          this.handleFlippedMatch()
        } else {
          this.handleFlippedMisMatch()
        }
      }, 500)
    }
  }

  handleFlippedMatch = () => {
    const cards = this.cards.filter(card => card.photo !== this.flippedCards[0].photo)
    if(cards.length === 0){
      this.gameIsOver = true
    }
    this.cards = cards
    this.flippedCards = []
  }

  handleFlippedMisMatch = () => {
    this.flippedCards.forEach(card => {
      card.flip()
    })
    this.flippedCards = []
  }

  resetGame = () => {
    this.resetDeck()
    this.gameIsOver = false
    this.clicks = 0
  }

  resetDeck = () => {
    this.cards = this.duplicatedAndShuffledCards()
    this.flippedCards = []
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos]).map(photo =>
      new Card(photo)
    )
  )
}

export default GameStore
