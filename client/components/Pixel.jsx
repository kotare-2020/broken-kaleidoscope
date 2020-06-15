import React from 'react'

class Pixel extends React.Component {

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }
  
    state = {
        height: '10px',
        width: '10px',
        backgroundColor: this.randomHexColor(),   
    }

    clickHandler = (evt) => {
        this.setState({
                backgroundColor: this.randomHexColor()
        })
    }

    makeGreen = (e) => {
        this.setState({
            backgroundColor: 'green'
        })
    }

    // makeRandom = (e) => {
    //     this.setState({
    //         backgroundColor: this.randomHexColor()
    //     })
    // }

    makeBlack = (e) => {
        this.setState({
            backgroundColor: 'black'
        })
        e.preventDefault()
    }

    makeWhite = (e) => {
        this.setState({
            backgroundColor: 'white'
        })
    }

    makeYellow = (e) => {
        this.setState({
            backgroundColor: 'yellow'
        })
    }

    render(){
        return (
            <>
                <div style={this.state} onClick={this.clickHandler} onMouseEnter={this.makeGreen} onContextMenu={this.makeBlack} onDoubleClick={this.makeWhite} onDragEnter={this.makeYellow}></div>
            </>
        )
    }
}


export default Pixel