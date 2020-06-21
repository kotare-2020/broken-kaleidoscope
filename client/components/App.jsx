import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    <div className="App">
   {Array.from({length: 500}, (v, i) => <Pixel/>)}
    </div>
  )
}



export default App
