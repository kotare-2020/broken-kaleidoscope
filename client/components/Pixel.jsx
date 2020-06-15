import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor()
    }
  }

  clickHandler = () => {
    this.setState({
      style: {
        ...this.state.style, backgroundColor: randomHexColor()
      }
    })
  }

  render() {
    return (
      <div style={this.state.style} onMouseEnter={this.clickHandler}>

      </div>
    )
  }
}

export default Pixel