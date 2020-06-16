import React from 'react'
import Pixel from './Pixel'

// let arr = []
// for (let i = 0; i <= 6000; i++) {
//   arr.push(<Pixel key={i} />)
// }
let arr = (new Array(1000)).fill().map((p, i) => <Pixel key={i} />)

class App extends React.Component {

  render() {

    return (<div>
      {arr}
    </div>
    )
  }
}

export default App