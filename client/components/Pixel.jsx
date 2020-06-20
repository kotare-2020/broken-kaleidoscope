import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

    state = {
        style: {
            height:'3px',
            width: '3px',
            backgroundColor: randomHexColor(), 
        }
    }

    clickHandler = event => {
        this.setState({
            style: {
                height:'3px',
                width: '3px',
                backgroundColor: randomHexColor(),
            }
        })
    }

    mouseEnterHandler = event => {
        this.setState({
            style: {
                height: '3px',
                width: '3px',
                backgroundColor: 'limegreen',
            }
        })
    }

    onContentMenuHandler = event => {
        this.setState({
            style: {
                height: '3px',
                width: '3px', 
                backgroundColor: 'silver'
            }
        })
        event.preventDefault()
    }

    onDoubleClickHandler = event => {
        this.setState({
            style: {
                height: '3px',
                width: '3px',
                backgroundColor: 'purple',
            }
        })
    }

    onDragHandler = event => {
        this.setState({
            style: {
                height: '3px', 
                width: '3px', 
                backgroundColor: 'yellow'
            }
        })
    }

    render() {
        return <div onClick={this.clickHandler} onMouseEnter={this.mouseEnterHandler} onContextMenu={this.onContentMenuHandler} onDoubleClick={this.onDoubleClickHandler} onDragEnter={this.onDragHandler} style={this.state.style}></div>
    }
}

export default Pixel