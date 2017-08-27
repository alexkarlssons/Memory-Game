import React from "react"

class GameOver extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game-over-div">
        <h1 className="game-over-text">Congratulations</h1>
        <div className="game-over-image-div">
          <img className="game-over-image" src="https://i.giphy.com/media/VpysUTI25mTlK/giphy.webp" alt=""/>
        </div>
      </div>
    )
  }

}

export default GameOver
