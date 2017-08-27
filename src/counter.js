import React from "react"

class Counter extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 className="click-text">Clicks: {this.props.clicks}</h1>
        <img className="sidebar-img" src="https://media.giphy.com/media/B2wyUZmPML3fG/giphy.gif"/>
      </div>
    )
  }

}

export default Counter
