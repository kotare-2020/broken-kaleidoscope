import React from 'react'
import Pixel from './Pixel'

// let arr = []
// arr.fill()
console.log('loading')
// for (let i = 0; i <= 6000; i++) {
//   arr.push(<Pixel key={i} />)
// }
let arr = (new Array(1000)).fill().map((p,i) => <Pixel key={i} />)

class App extends React.Component {


  // state = {
  //   fontFamily: 'monospace',
  //   height: '20px',
  //   width: '20px',
  //   backgroundColor: 'RebeccaPurple'
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     fontFamily: 'monospace',
  //     height: '20px',
  //     width: '20px',
  //     backgroundColor: 'RebeccaPurple'
  //   }
  // }


  render() {



    return (<div>
      {arr}
    </div>
    )
  }
}

export default App
