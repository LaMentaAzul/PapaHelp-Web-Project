import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import twitter from './twitter.png'
import email from './email.png'
import './HomeStyle.css'
import './Style.css'
import './Ford.css'
import './ProblemStyle.css'
export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <br />
        <br />
        <Container>
          <Row>
            <Col md='4' className='footerCol'>
              <div className='text'>
                <strong>Copyright &nbsp; &copy; &nbsp; {new Date().getFullYear()} Papa Help </strong>
                <br />
                <strong>All Rights Reserved</strong>
              </div>
            </Col>
            <Col md='4' className='footerCol'>
              <div className='text'>
                <strong>Contact Papa Help :</strong>
              </div>
              <br />
              <a href='https://twitter.com/PapaHelp'>
                <img src={twitter} className='twitter' alt='twitter' />
              </a>
              &nbsp; Twitter
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='mailto:beratung@papahelp.ch'>
                <img src={email} className='email' alt='email' />
              </a>
              &nbsp; Email
            </Col>
            <Col md='4' className='footerCol'>
              <div className='text'>
                <strong>Designed by Mina Tahaei</strong>
              </div>
              <br />
              Contact :
              <a href='mailto:minatahaei@outlook.com'>
               &nbsp; minatahaei@outlook.com
              </a>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </footer>
    )
  }
}
