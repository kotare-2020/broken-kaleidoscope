import React from 'react'
import Pixel from './Pixel.jsx'

const Pixels = props => {
  const arr = []
  for (let i = 0; i < props.amount; i++) {
    arr.push(<Pixel />)
  }

  return arr

}

export default Pixels