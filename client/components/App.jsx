import React from 'react'
import Pixel from './Pixel.jsx'



const App = () => {
  let newArr = []
  
  for (let i = 0;i < 100000; i++) {
     newArr.push(<Pixel/>)
  }
  return newArr
}

export default App
