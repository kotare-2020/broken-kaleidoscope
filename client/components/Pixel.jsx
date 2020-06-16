import React from 'react'
import { createPortal } from 'react-dom'

class Pixel extends React.Component {


  state = {
    style: {
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
      height: '500px',
      width: '200px',
      opacity: '0.5',
      borderRadius: '20%',

      }
  }

  
  colorChange = () => {
    this.setState({
      
      style: {
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
        height: `500` + 'px',
        // ${Math.floor(Math.random() * 30)}
        width: `200` + 'px',
        opacity: '0.5',
        borderRadius: '20%',
        position: 'sticky',
      }
    })
  }
  
  
  render() {
    {setTimeout(this.colorChange, 200)}

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