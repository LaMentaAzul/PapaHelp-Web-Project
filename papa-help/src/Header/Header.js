import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export default class Header extends Component{
  render () {
    return (
      <div>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/src/Header/Problem.js">Problem</Link></li>
          <li><Link to ="/src/Header/Presse.js">Presse</Link></li>
          <li><Link to ="/src/Header/Losungsansatze.js">Losungsansatze</Link></li>
          <li><Link to ="/src/Header/Literatur.js">Literatur</Link></li>
          <li><Link to ="/src/Header/Gewalt.js">Gewalt</Link></li>
          <li><Link to ="/src/Header/Forderungen.js">Forderungen</Link></li>
          <li><Link to ="/src/Header/HilfePapa.js">HilfePapa</Link></li>
          <li><Link to ="/src/Header/ENGLISH.js">ENGLISH</Link></li>
        </ul>
      </div>
    )
  }
}
