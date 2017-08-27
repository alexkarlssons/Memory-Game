import React from "react"
import { inject, observer } from "mobx-react"

@inject("gameStore") @observer
class Card extends React.Component {

  flipCard = () => {
    if(!this.props.card.flipped){
      this.props.gameStore.flip(this.props.card)
    }
  }

  render() {
    return (
      <div onClick={this.flipCard} className="card-box">
        <img className="card-image" src={this.props.card.flipped?this.props.card.photo:"https://i.pinimg.com/736x/4c/68/45/4c6845829aec8d3f8f35899cccc8b1d6--joker-playing-card-joker-card.jpg"} alt=""/>
      </div>
    )
  }

}

export default Card
