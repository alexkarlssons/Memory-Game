import React from "react"

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  flipCard = () => {
    if(this.props.canFlip){
      this.setState({ flipped: true })
      this.props.onFlip(this.props.image, this.props.id, this.handleCardFlipRequest)
    }
  }

  handleCardFlipRequest = () => {
    this.setState({ flipped: false })
  }

  render() {
    return (
      <div onClick={this.flipCard} className="card-box">
        <img className="card-image" src={this.state.flipped?this.props.image:"https://i.pinimg.com/736x/4c/68/45/4c6845829aec8d3f8f35899cccc8b1d6--joker-playing-card-joker-card.jpg"} alt=""/>
      </div>
    )
  }

}

export default Card
