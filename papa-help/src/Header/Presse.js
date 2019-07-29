import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import PTitle from './presse1.jpg'
export default class Presse extends Component {
  render () {
    return (
      <div className='Header'>
        <hr />
        <center>
          <img src={PTitle} alt='Presse' max-width='100%' />
        </center>
        <hr />
        <Container>
          <Row>
            <Col md='12'>
              <div className='presse2'>
                <br />
                <h2>
                  <strong>Nicht ohne meinen Sohn</strong>
                </h2>
                <h3>Die Weltwoche Nr. 29, Juli 2014</h3>
                Theoretisch sind Mann und Frau vor dem Gesetz gleich - im Fall einer Scheidung sind Frauen jedoch gleicher, wie diese Geschichte aus dem Kanton Zug zeigt
                <br />
                <br />
                <a href=''>
                  <button type='button' className='btn btn-info'>LESEN</button>
                </a>
                <br />
                <br />
                <br />
              </div>
              <br />
              <br />
              <div className='presse2'>
                <br />
                <h2>
                  <strong>Ein Hausmann im Elend</strong>
                </h2>
                <h3>Die Weltwoche Nr. 35, September 2014</h3>
                Bericht über Ronnie S., der versucht, ein guter Vater zu sein, der daran jedoch von den Behörden gehindert wird
                <br />
                <br />
                <a href=''>
                  <button type='button' className='btn btn-info'>LESEN</button>
                </a>
                <br />
                <br />
                <br />
              </div>
              <br />
              <br />
              <div className='presse2'>
                <br />
                <h2>
                  <strong>Es wird nicht weniger Streit geben</strong>
                </h2>
                <h3>Tages-Anzeiger Online, 23. Juni 2014</h3>
                Das seit dem 1. Juli 2014 gültige Familienrecht wird weiterhin für Konflikte zwischen den Eltern sorgen
                <br />
                <br />
                <a href=''>
                  <button type='button' className='btn btn-info'>LESEN</button>
                </a>
                <br />
                <br />
                <br />
              </div>
              <br />
              <br />
              <div className='presse2'>
                <br />
                <h2>
                  <strong>Das Kind kriegst du nicht (VIDEO)</strong>
                </h2>
                <h3>VIDEO-ARD - 15. Oktober 2012</h3>
                <br />
                <br />
                <a href=''>
                  <button type='button' className='btn btn-success'>VIDEO</button>
                </a>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
