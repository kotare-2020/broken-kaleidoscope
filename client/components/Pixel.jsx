import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
    style: {
      backgroundColor: randomHexColor(),
    },
    size: {
      height: '15px', width: '15px'
    }
  }

  doubleClickHandler = event => {
    this.setState({
      style: { backgroundColor: 'white' }
    })
  }

  dragHandler = event => {
    this.setState({
      style: { backgroundColor: 'yellow' }
    })
  }

  contextMenuHandler = event => {
    this.setState({
      style: { backgroundColor: 'black' }
    })
  }

  mouseHoverHandler = event => {
    this.setState({
      style: { backgroundColor: 'green' }
    })
  }
  clickHandler = event => {
    this.setState({
      style: { backgroundColor: randomHexColor() }
    })
  }

  render() {
    let fullyStyled = {}
    fullyStyled = Object.assign(fullyStyled, this.state.style)
    fullyStyled = Object.assign(fullyStyled, this.state.size)

    return (
      <div
        onDragEnter={this.dragHandler}
        onDoubleClick={this.doubleClickHandler}
        onContextMenu={this.contextMenuHandler}
        // onMouseEnter={this.mouseHoverHandler}
        onClick={this.clickHandler}
        style={fullyStyled}>

      </div>)
  }
}

/*
style={{
  backgroundColor: 'cornflowerblue', height: '50px', width: '50px'
}}
 
 dodgerblue, cornflowerblue, lightsteelblue from:
 https://www.rapidtables.com/web/css/css-color.html#blue
 */

export default Pixel