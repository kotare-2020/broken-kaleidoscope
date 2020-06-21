import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  let arr = []
  for (let i = 0; i < 250; i++) {
    arr.push(<Pixel/>)
  }
  return arr
}

export default App
