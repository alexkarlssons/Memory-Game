import React from "react"

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card-box">
        <img className="card-image" src={this.props.image} alt=""/>
      </div>
    )
  }

}

export default Card
