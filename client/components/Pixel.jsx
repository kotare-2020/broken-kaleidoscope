import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



class Pixel extends React.Component {
  state = {
    style: {
    height: '7px',
    width: '7px',
    backgroundColor: randomHexColor()
    }
  }

  clickHandler = e => {
    this.setState({
      style: {
        height: '7px',
        width: '7px',
        backgroundColor: randomHexColor()
        }
    })
  }

  hoverHandler = e => {
    this.setState({
      style: {
        height: '7px',
        width: '7px',
        backgroundColor: 'purple'
        }
    })
  }

  rightClickHandler = e => {
    this.setState({
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: 'black'
        }
    })
    e.preventDefault()
  }

  clickDragHandler = e => {
    this.setState({
      style: {
        height: '7px',
        width: '7px',
        backgroundColor: 'yellow'
        } 
    })
  }

  doubleClickHandler = e => {
    this.setState({
      style: {
        height: '7px',
        width: '7px',
        backgroundColor: 'white'
        }
    })
  }

  render() {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.hoverHandler}
      onContextMenu={this.rightClickHandler} onDoubleClick={this.doubleClickHandler} onDragEnter={this.clickDragHandler}>
      </div>
    )
  }
}

export default Pixel

