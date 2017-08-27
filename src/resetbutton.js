import React from "react"

class ResetButton extends React.Component {

  constructor(props) {
    super(props)
  }

  handleReset = () => {
    this.props.onReset()
  }

  render() {
    return (
      <div className="button-box">
        <button onClick={this.handleReset} className="reset-button"> Reset </button>
      </div>
    )
  }

}

export default ResetButton
