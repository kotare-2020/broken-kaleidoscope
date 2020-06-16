import React from 'react'
import Pixel from './Pixel'

const App = () => {
  // let newArray = []
  // for(let i=0;i < 2000; i++) {
  //    newArray.push(<Pixel/>)
  // }
  return Array.from({length: ((window.innerWidth / 40) * (window.innerHeight / 40))}, (item, i) => <Pixel key={i}/>)
}

export default App
