import { observable, action } from "mobx"

import shuffle from "../shuffle"

const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg",
  "/images/dog-6.jpg"
]

class CardsStore {
  @observable cards = []

  constructor() {
    this.cards = this.duplicatedAndShuffledCards()
  }

  @action resetCards() {
    this.cards = this.duplicatedAndShuffledCards()
  }

  @action setCards(cardList) {
    this.cards = cardList
  }

  duplicatedAndShuffledCards = () => (
    shuffle([...photos, ...photos])
  )
}

export default CardsStore
