import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '40px',
      width: '40px',
      backgroundColor: randomHexColor(),
      animation: '',
       animationIterationCount: 'infinite'
    }    
  }

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
      <div style={this.state.style} onMouseEnter={this.enterEvent} onContextMenu={this.contextEvent} onDoubleClick={this.doubleEvent} onDragEnter={this.dragEvent} >

      </div>
    )
  }
}

export default Pixel