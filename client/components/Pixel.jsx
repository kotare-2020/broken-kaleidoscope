import React from 'react'
import { createPortal } from 'react-dom'

class Pixel extends React.Component {


  state = {
    style: {
      fontFamily: 'Helvetica',
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
      height: '500px',
      width: '1px',
      float: 'center',
      }
  }

  colorChange = () => {
    this.setState({
      style: {
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
        height: `${Math.floor(Math.random() * 1000)}` + 'px',
        width: `${Math.floor(Math.random() * 30)}` + 'px',
        float: 'center',
        fontFamily: 'Helvetica',
      }
    })
    console.log(this.style.width)
}


  render() {

    return (


      <div onMouseOver={this.colorChange} style={this.state.style}></div>
      
    )
  }
}

  export default Pixel





// Pixel = () => {
//   return (
//     <div style={{
//       fontFamily: 'Helvetica',
//       backgroundColor: 'papayawhip',
//       // fontSize: '600%',
//       height: '200px',
//       width: '200px',