import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './HomeStyle.css'
import './Style.css'
import './Ford.css'
import './ProblemStyle.css'
export default class Physische extends Component {
  render () {
    return (

      <Container>
        <Row>
          <hr />
          <h1>
             Physische Gewalt
          </h1>
          <hr />
          <br />
          <br />
          <Col md='12' className='Colp'>
            <p>
        Murray A. Straus von der Universität New Hampshire widerlegt in seiner Arbeit "Dominance and Symmetry in Partner Violence" den weitverbreiteten Irrtum, Gewalt in Ehe und ähnlichen Lebensgemeinschaften gehe weitgehend von Männern aus. Er widerlegt darin auch, dass Angriffe von Frauen auf ihre Partner auf einer anderen Äthiologie beruhe als Angriffe von Männern auf deren (Ehe-)Frauen.
              <br />
              <br />
          Nach langjährigem trautem Zusammenhalten und dem Betreuen von gemeinsamen Kindern kommt es bei Paaren, die vor der Trennung stehen, vermehrt zu Handgreiflichkeiten. Dies geht u.a. aus einer Studie hervor, die der Bremer Soziologe Gerhard Amendt sowie sein Mitarbeiterteam am Institut für Geschlechter- und Generationenforschung bereits in den Jahren 2000 bis 2003 verfasste. Er befragte dazu über das Internet 3800 Männer aus der Schweiz, Deutschland und Österreich.
              <br />
              <br />
          Danach geht in knapp jedem vierten Fall häusliche Gewalt von Männern und zu 58 % von Frauen aus.
          In 14 % gehen die Handgreiflichkeiten von beiden aus. Zu den Handgreiflichkeiten zählen u.a. Schläge ins Gesicht, Treten und Anspucken, aber auch der Wurf mit einer Tasse sowie schwerste Angriffe mit Gegenständen und Waffen.
              <br />
              <br />
          Eine Untersuchung des Kriminologischen Forschungsinstitutes Niedersachsen kommt zu dem Ergebnis, dass in Deutschland jährlich 240.000 Frauen und 214.000 Männer Opfer häuslicher Gewalt werden. Es besteht kein Anlass, diese Zahlen nicht auch proportional auf die Schweiz mit ihren ähnlichen Strukturen zu übertragen.
              <br />
              <br />
          Aus der Bremer Befragung geht auch hervor, dass ein Teil der Männer sich noch lange nach solchen Auseinandersetzungen hilflos und psychisch verletzt fühlt. Nicht selten wird ihnen nämlich im gerichtlichen Scheidungsverfahren nicht geglaubt, dass sie geschlagen wurden. Sie müssen sich sagen lassen:
          "Ein Mann von Ihrer Statur wird nicht von seiner Frau geschlagen!"
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>

    )
  }
}
