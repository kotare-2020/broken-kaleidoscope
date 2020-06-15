import React from 'react'



class Pixel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            styles: { backgroundColor: randomHexColor(), height: '20px', width: '20px' }
        }
    }

    clickHandler = evt => {
        this.setState({
          styles: { backgroundColor: randomHexColor() }
        })
      }

      onClick = this.clickHandler

    render() {
        return (<div style={this.state.styles}>  </div >)
    }
}


// Generate Random Colour
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel