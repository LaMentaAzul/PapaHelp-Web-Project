import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default class Losungsansatze extends Component {
  render () {
    return (
      <div className='Header'>
       <hr />
        <h1>
        Ansätze zur Lösung
        </h1>
       <hr />
       <Container>

         <Row>
         <Col md='12' className='Colp'>
           <h3>Familien zu erhalten ist eine staatstragende Aufgabe! </h3>
           <br></br>
           Das Angebot dazu ist allerdings von Seiten der öffentlichen Hand beschränkt oder gar nicht vorhanden. Es ist darum höchste Zeit, dass betroffene Väter diese Aufgabe selbst angehen und ausdrücken, was ihre bedrohten Familien nötig haben. 
           <br></br>
           <br></br>
           Ein Stichwort dazu heisst "Mediation" - Vermittlungsarbeit zwischen Trennungswilligen mit der Absicht, für beide Seiten akzeptable und praktizierbare Lösungen zu erarbeiten. Natürlich immer mit dem Augenmerk auf dem wirklichen Wohl der Kinder. Es sei an dieser Stelle gewarnt vor Scheidungsanwälten, die in einem kurzen Kurs das gelernt haben wollen und es auch teuer verkaufen, was sich Fachleute wie Sozialarbeiter oder Therapeuten in mehrjährigen Ausbildungen seriös erarbeitet haben.  
           <br></br>
           <br></br>
           Die Idee der Mediation wird im sog. "Cochemer Modell" weitergeführt. Es geht dabei um eine Zusammenarbeit der unterschiedlichsten Professionen, die an einem familienrechtlichen Verfahren beteiligt sind, bis eine einvernehmliche Lösung gefunden wird. Trotz Kritik am Modell ist sie bis anhin die effektivste Methode, einen "Rosenkrieg" zu vermeiden, resp. in geordnete Bahnen zu lenken.
           <br></br>
           <br></br>
           Da anderseits ein adäquates Auffangnetz für die beschriebenen, unschuldig gestrauchelten Männer in der Schweiz völlig fehlt, sind sie sich selbst überlassen. Hier geben sich zwar Väterorganisationen Mühe, in gutgemeinter Absicht Entlastung anzubieten, sie sind jedoch aufgrund ihrer fehlenden Kenntnisse nur beschränkt zum Handeln fähig. Das von der Öffentlichkeit bis anhin nur marginal zur Kenntnis genommene Thema bedarf daher einerseits dringend der Anerkennung und damit der Bezeichnung eines sozialen Problems und anderseits des professionellen Einsatzes. 
           <br></br>
           <br></br> 
           Das vorliegende Beratungsangebot ist daher im Sinn eines Auffangnetzes zu verstehen. Es soll primär dazu anregen, dass sich betroffene Väter zu erkennen geben. Im weiteren sollen diese lernen, verschüttete Ressourcen selbst oder unter Anleitung zu reaktivieren und sich nicht zuletzt auf Dauer mit anderen Betroffenen zu solidarisieren. Denn Solidariät ist unter Männern bis anhin immer noch ein Fremdwort; meine Erfahrung zeigt, dass sie sich nach kürzester Zeit zurückziehen, nachdem sie ansatzweise über ihre Probleme berichtet haben - anstatt sich mit ihresgleichen zusammenzutun.      
         </Col>
         </Row>
       </Container>
      </div>
    )
  }
}
