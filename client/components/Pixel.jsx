import React from 'react'



class Pixel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: { backgroundColor: randomHexColor(), height: '30px', width: '30px' }
    }
  }

  clickHandler = evt => {
    this.setState({
      styles: { backgroundColor: randomHexColor(), height: '30px', width: '30px' }
    })
  }

  render() {
    return (<div onClick={this.clickHandler} onMouseEnter={this.clickHandler} style={this.state.styles}>
    </div >)
  }
}


// Generate Random Colour
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel