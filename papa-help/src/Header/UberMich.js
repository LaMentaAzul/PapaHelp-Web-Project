import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
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
            <Col>
              <Col xs={6}><img src={Rud} className='imgRes' alt='Rudolf Oswald' /></Col>
              <Col xs={6} className='Col'>
                <strong>Über mich:</strong>
                <p>
                  <strong>Rudolf Oswald, 1951</strong>
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
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}
