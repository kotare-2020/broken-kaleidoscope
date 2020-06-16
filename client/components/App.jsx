import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {

  
  render() {
    var arr = []
    {for (var i = 0; i < 80; i++) {
      arr.push(<Pixel/>)
    }}
  return (
    <>
    {arr}
    </>
    )
  }
}

export default App
