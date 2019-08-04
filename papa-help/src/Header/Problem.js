import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './HomeStyle.css'
import './Style.css'
import './Ford.css'
import './ProblemStyle.css'

export default class Problem extends Component {
  render () {
    return (
      <div className='Header'>
        <hr />
        <h1>
         Problem
        </h1>
        <hr />
        <br />
        <br />
        <Container>
          <Row>
            <Col md='12' className='Colp'>
              <h3>Die Schweiz lebt seit Jahrzehnten eine Tradition der Wegnahme der Kinder von deren Eltern und dadurch eine bewusst in Kauf genommenen Zerstörung der Eltern-Kind-Beziehung.</h3>
              <br />
            Erst waren es vom 19. bis tief ins 20. Jahrhundert hinein die Verdingkinder - Kinder, die durch die Behörden entrechtet und meist an Bauern vermittelt, von diesen als billige Arbeitskräfte ausgenutzt, schwerster körperlicher Züchtigung und nur allzu oft auch sexueller Ausbeutung ausgesetzt waren. Fürsorge hiess hier noch, ein Kind zum Ding zu machen!
              <br />
              <br />
            Dann waren es von 1926 - 1972 die "Kinder der Landstrasse". Aus rassenhygienischen Gründen wurde versucht, die als "asozial" geltenden Fahrenden auszurotten. Dazu war das Mittel, ihnen die Kinder wegzunehmen und diese in Pflegefamilien, in Heimen, psychiatrischen Anstalten und sogar in Gefängnissen oder auch wieder als Verdingkinder bei Bauern unterzubringen, gerade gut genug. 600 Kinder waren davon betroffen, einige von ihnen, die ihrer Mutter gleich nach der Geburt weggenommen wurden, suchen bis heute verzweifelt ihre leiblichen Eltern. Zu den Protagonisten derartiger bevölkerungssanitärer und rassehygienischer Konzepte gehörte ausgerechnet ein Psychiater mit seinen eugenischen Schriften.
              <br />
              <br />
            Heutzutage hat die systematische Eltern-Kinder-Entfremdung sogar einen wissenschaftlich gefestigten Namen: Parental Alienation Syndrome (PAS), Eltern-Entfremdungs-Syndrom.
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
