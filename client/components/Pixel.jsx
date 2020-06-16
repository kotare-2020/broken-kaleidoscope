import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '30px',
      width: '30px',
      backgroundColor: randomHexColor(),
      animation: 'rainbow-bg infinite 15s linear',
    }
  }

  resetPixel = () => {
    this.setState({
      style: {
        ...this.state.style, animation: 'rainbow-bg infinite 15s linear'
      }
    })
  }

  // componentDidMount() {
  //   setInterval(this.resetPixel, 1000)
  // }

  enterEvent = () => {
    this.setState({
      style: {
        ...this.state.style, animation: 'rainbow-bg infinite 5s linear',
      }
    })
  }

  contextEvent = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        ...this.state.style, backgroundColor: "#000000"
      }
    })
  }

  doubleEvent = () => {
    this.setState({
      style: {
        ...this.state.style, backgroundColor: "#FFFFFF"
      }
    })
  }

  dragEvent = (e) => {
    console.log(e)
    this.setState({
      style: {
        ...this.state.style, backgroundColor: "#FFFF00"
      }
    })
  }

  render() {
    return (
      <div
        style={this.state.style}
        onMouseEnter={this.enterEvent}
        onContextMenu={this.contextEvent}
        onDoubleClick={this.doubleEvent}
        onDragEnter={this.dragEvent}
      >
      </div>
    )
  }
}

export default Pixel