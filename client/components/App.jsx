import React from 'react'
import Pixel from './Pixel.jsx'





const App = () => {
  let pixelArray = []
  for (let i = 0; i < 1000; i++) {

    pixelArray.push(<Pixel />)
  }
  console.log(pixelArray)
  return pixelArray
  // return <p>HELLO</p>
}




export default App
