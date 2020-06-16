import React from 'react'
import { createPortal } from 'react-dom'

class Pixel extends React.Component {


  state = {
    style: {
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
      height: '500px',
      width: '20px',

      }
  }

  colorChange = () => {
    this.setState({
      
      style: {
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
        height: `${Math.floor(Math.random() * 10000)}` + 'px',
        // ${Math.floor(Math.random() * 30)}
        width: `${Math.floor(Math.random() * 30)}` + 'px',
        border: '1px  solid red',
        borderRadius: '20%',
      }
    })
}


  render() {

    return (


      <div className="spin" onMouseOver={this.colorChange} style={this.state.style}></div>
      
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