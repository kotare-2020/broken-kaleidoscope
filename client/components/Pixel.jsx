import React from 'react'


//State Facts//
//can only be used in class components
//must be declared before render
//is does not permanently change DB unless told, is a component created inside React
//can be changed (prior to render) using this.setState
//can take in functions like any JS objects

//return is always inside render
class Pixel extends React.Component {
    
    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    state = {
        height: '20px',
        width: '20px',
        backgroundColor: this.randomHexColor(),
    }

    clickHandler = (e) => {
        this.setState({
          backgroundColor: this.randomHexColor()
        })
      }

    render() {
        return (
            <>
            <div style={this.state} onClick={this.clickHandler}>
            </div>
            </>
        )
    }
}

export default Pixel