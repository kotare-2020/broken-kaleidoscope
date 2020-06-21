import React from 'react'
import Pixel from './Pixel'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


class Kaleidoscope extends React.Component {
    
    render () {
        return (
            <>
            <Router> 
            <div className = "titles_Kale">
            <h1>colourful things!</h1>
            <Link to="/"> <h1>home</h1> </Link>
            </div>
            <div className = "App">
            {Array.from({ length: 450 }, (v, i) => < Pixel />)}
            </div>
            </Router>   
            </>
        )
    }

  
}

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Kaleidoscope