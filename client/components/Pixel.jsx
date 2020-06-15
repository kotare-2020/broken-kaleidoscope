import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
    style: {
      backgroundColor: randomHexColor(), height: '50px', width: '50px'
    }
  }
  render() {
    return <div style={this.state.style}></div>
  }
}

/*
style={{
  backgroundColor: 'cornflowerblue', height: '50px', width: '50px'
}}

 dodgerblue, cornflowerblue, lightsteelblue from:
 https://www.rapidtables.com/web/css/css-color.html#blue good shit
 */

export default Pixel