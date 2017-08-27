import React from "react"

class Counter extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 className="click-text">Clicks: {this.props.clicks}</h1>
      </div>
    )
  }

}

export default Counter
