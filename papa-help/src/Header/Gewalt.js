import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Psych from './gewalt2.jpg'
import Phys from './gewalt1.jpg'
import struck from './gewalt3.jpg'
import './HomeStyle.css'
import './Style.css'
import './Ford.css'
import './ProblemStyle.css'

export default class Gewalt extends Component {
  render () {
    return (
      <div >
        <hr />
        <h1>
        Festgefahrene Denkmuster haben keine Gültigkeit mehr
        </h1>
        <hr />
        <br />
        <br />
        <Container>
          <Row>
            <Col md='12' className='Colp'>
            Seit Jahren zeigen zahlreiche Studien unwidersprochen, dass in heterosexuellen Zweierbeziehungen Männer gerade in Trennungssituationen körperlicher (physischer) wie seelischer (psychischer) Gewalt durch Frauen ausgesetzt sind.
              <br />
              <br />
              Doch die offizielle Schweiz, seine Behörden und insbesondere deren feministisch angehauchten und sexistischen Gerichte, bis anhin weitgehend auch Presse, Radio und TV verschliessen die Augen vor dieser Realität. Es ist für alle an der Zeit, den richtigen Umgang mit der Realität zu lernen!
              <br />
              <br />

            </Col>
            <hr />
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4'>
                  <strong>Physische Gewalt</strong>
                </h4>
              </center>
              <center>
                <Link to='/src/GewaltContent/Physische.js'>
                  <img src={Phys} className='img' alt='Phys' />
                </Link>
              </center>

            </Col>
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4'>
                  <strong>Strukturelle Gewalt</strong>
                </h4>
              </center>
              <center>
                <Link to='/src/GewaltContent/Strukturelle.js'>
                  <img src={struck} className='img' alt='struck' />
                </Link>
              </center>

            </Col>
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4' >
                  <strong>Psychische Gewalt</strong>
                </h4>
              </center>
              <center>
                <Link to='/src/GewaltContent/Psychische.js'>
                  <img src={Psych} className='img' alt='Psych' />
                </Link>
              </center>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col md='12' className='GewaltH2' >
              <h2>
              Drücken Sie auf das gewünschte Thema, um Informationen zu erhalten
              </h2>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col md='12' className='ColN'>
            Die staatlich tolerierte Verweigerung des Umgangs mit den Kindern stellt eine flagrante, ständige und wiederholte Verletzung des Artikels 8, Absatz 2 der auch von der Schweiz unterzeichneten Europäischen Menschenrechts-Konvention (EMRK) dar. Der ganze Wortlaut dieses Artikels:
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col md='12' className='Coly'>
              <h1>
           Recht auf Achtung des Privat- und Familienlebens
              </h1>
          1. Jedermann hat Anspruch auf Achtung seines Privat- und Familienlebens, seiner Wohnung und seines Briefverkehrs.
              <br />
              <br />
          2. Der Eingriff einer öffentlichen Behörde in die Ausübung dieses Rechts ist nur statthaft, insoweit dieser Eingriff gesetzlich vorgesehen ist und eine Massnahme darstellt, die in einer demokratischen Gesellschaft für die nationale Sicherheit, die öffentliche Ruhe und Ordnung, das wirtschaftliche Wohl des Landes, die Verteidigung der Ordnung und zur Verhinderung von strafbaren Handlungen, zum Schutz der Gesundheit und der Moral oder zum Schutz der Rechte und Freiheiten anderer notwendig ist.
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
