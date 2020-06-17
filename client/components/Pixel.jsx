import React from "react"
// import Clicks from "./Clicks"

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {




  clickHandler = evt => {
    this.setState({

      style: {

        ...this.state.style,
        backgroundColor: randomHexColor()
      }
      // ... update style here ...
    })
  }


  hovering = evt => {

    this.setState({

      style: {

        ...this.state.style,
        backgroundColor: 'black'
      }
      // ... update style here ...
    })


  }


  


  state = {

    style: {

      height: '10px',
      width: "10px",
      backgroundColor: randomHexColor()
    }

  }

  render() {
    return (

      <div onClick={this.clickHandler} onMouseEnter={this.hovering} style={this.state.style}></div>
    )

  }
}


export default Pixel


