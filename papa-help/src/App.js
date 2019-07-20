import React, { Component } from 'react'
import './App.css'
import UberMich from './Header/UberMich'
import Problem from './Header/Problem'
import Presse from './Header/Presse'
import Losungsansatze from './Header/Losungsansatze'
import Forderungen from './Header/Forderungen'
import Literatur from './Header/Literatur'
import ENGLISH from './Header/ENGLISH'
import Gewalt from './Header/Gewalt'
import HilfePapa from './Header/HilfePapa'
import Header from './Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/' component={UberMich} />
          <Route path='/src/Header/Problem.js' component={Problem} />
          <Route path='/src/Header/Presse.js' component={Presse} />
          <Route path='/src/Header/Losungsansatze.js' component={Losungsansatze} />
          <Route path='/src/Header/Literatur.js' component={Literatur} />
          <Route path='/src/Header/HilfePapa.js' component={HilfePapa} />
          <Route path='/src/Header/Gewalt.js' component={Gewalt} />
          <Route path='/src/header/Forderungen.js' component={Forderungen} />
          <Route path='/src/header/ENGLISH.js' component={ENGLISH} />
        </div>
      </Router>
    )
  }
}

export default App
