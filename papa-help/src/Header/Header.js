import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pic from './papa.png'
export default class Header extends Component {
  render () {
    return (
      <div>
        <img src={pic} className='pic' />
        <ul className='menu-ul'>
          <li><Link to='/' style={{ textDecoration: 'none', color: '#5B5454',  fontSize: '20px' }}>Home</Link></li>
          <li><Link to='/src/Header/Problem.js' style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }} >Problem</Link></li>
          <li><Link to='/src/Header/Presse.js' style={{ textDecoration: 'none', color: '#5B5454',  fontSize: '20px' }} >Presse</Link></li>
          <li><Link to='/src/Header/Losungsansatze.js' style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }} >Losungsansatze</Link></li>
          <li><Link to='/src/Header/Literatur.js'style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }} >Literatur</Link></li>
          <li><Link to='/src/Header/Gewalt.js' style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }}>Gewalt</Link></li>
          <li><Link to='/src/Header/Forderungen.js'style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }}>Forderungen</Link></li>
          <li><Link to='/src/Header/HilfePapa.js'style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }}>HilfePapa</Link></li>
          <li><Link to='/src/Header/ENGLISH.js'style={{ textDecoration: 'none', color: '#5B5454', fontSize: '20px' }}>ENGLISH</Link></li>
        </ul>
      </div>
    )
  }
}
