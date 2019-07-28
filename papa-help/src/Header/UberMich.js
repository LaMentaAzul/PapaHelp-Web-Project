import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Rud from './Rud.jpg'
export default class UberMich extends Component {
  render () {
    return (
      <div className='text'>
        <hr />
        <h1>
         Die Website zu den Tabuthemen
        </h1>
        <ul className='a'>
          <li className='li'>Umgangsverweigerung</li>
          <li className='li'>Kinderentfremdung</li>
          <li className='li'>Gewalt in Zweierbeziehungen</li>
        </ul>
        <hr />
        <Container>
          <Row>
            <Col xs='6'><img src={Rud} className='imgRes' alt='Rudolf Oswald' /></Col>
            <Col xs='6' className='Col'>
              <div className='title'>
                <strong>Über mich:</strong>
              </div>
              <p>
                <div className='title'>
                  <strong>Rudolf Oswald, 1951</strong>
                </div>
              </p>
              <p>
                <ul className='b'>
                  <li className='li'>
                    Dipl. Sozialarbeiter HFS
                  </li>
                  <li className='li'>Vater von drei Kindern</li>
                  <li className='li'>weltgereist</li>
                  <li className='li'>mehrsprachig</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}
