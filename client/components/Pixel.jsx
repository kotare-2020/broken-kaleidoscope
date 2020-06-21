import React from 'react'

class Pixel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            style: {backgroundColor: randomHexColor() }
        }
    }
    
    mouseOverCallThisFunction = evt => {
        this.setState ({
            style: {backgroundColor: randomHexColor() }
        })
    }

    onDragThroughPixel = evt => {
        this.setState ({
            style: {backgroundColor: "Black"}
        })
        console.log('hi!')
        
    }

    render () {
        return (
            <div onMouseEnter = {this.mouseOverCallThisFunction} onDragEnter = {this.onDragThroughPixel} style={{height: "40px" , width: "40px", backgroundColor: this.state.style.backgroundColor }}> 
            </div>
        )
        
    }

  
}

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel