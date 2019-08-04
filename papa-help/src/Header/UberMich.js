import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Rud from './Rud.jpg'
export default class UberMich extends Component {
  render () {
    return (
      <div className='text'>
        <Container className='TitleRes'>
          <hr />
          <center>
            <h1>
          Die Website zu den Tabuthemen
            </h1>
          </center>
          <center>
            <ul className='a'>
              <li className='li'>Umgangsverweigerung</li>
              <li className='li'>Kinderentfremdung</li>
              <li className='li'>Gewalt in Zweierbeziehungen</li>
            </ul>
          </center>
          <hr />
        </Container>

        <Container className='TitleRes'>
          <Row>
            <Col md='12'>
              <div className='text'>
                <br />
                <br />
                <br />
                <img src={Rud} className='imgRes' alt='Rudolf Oswald' />
                <br />
                <br />
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
                    <li className='li'>Weltgereist</li>
                    <li className='li'>Mehrsprachig</li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>

    )
  }
}
