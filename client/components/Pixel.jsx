import React from 'react'
import { createPortal } from 'react-dom'

class Pixel extends React.Component {


  state = {
    style: {
      fontFamily: 'Helvetica',
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
      height: '10px',
      width: '10px',
      
    }
  }

  render() {

    return (


      <div style={this.state.style}></div>
      
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