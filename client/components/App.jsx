import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    if (i < 1000) {
      arr.push(<Pixel/>)
    }
  }
  return arr
}

export default App
