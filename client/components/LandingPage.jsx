import React from 'react'
import Kaleidoscope from "./Kaleidoscope"
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <>
            <Router>
            <div className="LandingPage">
                <h1>Hi, I made some colourfull things! Click below to see them</h1>
                <Link to="/kaleidoscope"> See the colourful things</Link>
            </div>

            
            </Router>
            </>
        )
    }
}

export default LandingPage