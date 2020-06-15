import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return Array(500).fill().map((p, i) => <Pixel key={i}/>)
}

export default App
