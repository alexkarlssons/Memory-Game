import React from "react"

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
    this.props.onFlip(this.props.image)
  }

  render() {
    return (
      <div onClick={this.flipCard} className="card-box">
        <img className="card-image" src={this.state.flipped?this.props.image:"/images/awesome.jpg"} alt=""/>
      </div>
    )
  }

}

export default Card
