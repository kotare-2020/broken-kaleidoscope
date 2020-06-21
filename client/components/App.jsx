import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Kaleidoscope from './Kaleidoscope'
import LandingPage from './LandingPage'

const App = () => {
  return (
    <Router>
      <div className="appStyling">
      
      <Route exact path="/" component={LandingPage} />
      
      </div>

      <Route path="/kaleidoscope" component={Kaleidoscope} />

      
      

    </Router>
  )
}



export default App
 