import React from "react"
import Card from "./card";

const photos = [
  "/images/dog-1.jpg",
  "/images/dog-2.jpg",
  "/images/dog-3.jpg",
  "/images/dog-4.jpg",
  "/images/dog-5.jpg",
  "/images/dog-6.jpg"
]

class Game extends React.Component {

  render() {
    return (
      <div>
        {photos.map(photo => (
          <Card image={photo}/>
        ))}
      </div>
    )
  }


}

export default Game
