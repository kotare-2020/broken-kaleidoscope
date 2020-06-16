import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return ( <div style = {{width: '60%', height: '65%' , margin: 'auto', paddingTop: '20px'}}>
    {Array.from({length: 500}, (v, i) => <Pixel />)}
    </div>
    ) 
}


export default App



