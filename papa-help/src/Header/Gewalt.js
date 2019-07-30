import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Psych from './gewalt2.jpg'
import Phys from './gewalt1.jpg'
import struck from './gewalt3.jpg'

export default class Gewalt extends Component {
  render () {
    return (
      <div >
        <hr />
        <h1>
        Festgefahrene Denkmuster haben keine Gültigkeit mehr
        </h1>
        <hr />
        <Container>
          <Row>
            <Col md='12' className='Colp'>
            Seit Jahren zeigen zahlreiche Studien unwidersprochen, dass in heterosexuellen Zweierbeziehungen Männer gerade in Trennungssituationen körperlicher (physischer) wie seelischer (psychischer) Gewalt durch Frauen ausgesetzt sind.
              <br />
              <br />
              Doch die offizielle Schweiz, seine Behörden und insbesondere deren feministisch angehauchten und sexistischen Gerichte, bis anhin weitgehend auch Presse, Radio und TV verschliessen die Augen vor dieser Realität. Es ist für alle an der Zeit, den richtigen Umgang mit der Realität zu lernen!
            </Col>
            <hr />
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4'>
                  <strong>Physische Gewalt</strong>
                </h4>
              </center>
              <center>
                <img src={Phys} className='img' alt='Phys' />
              </center>
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
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4'>
                  <strong>Strukturelle Gewalt</strong>
                </h4>
              </center>
              <center>
                <img src={struck} className='img' alt='struck' />
              </center>
              <p>
              Eine dritte Form von Gewalt, der Männer ausgesetzt sind, ist die strukturelle. Unter dem inflationsträchtigen und beliebig gewordenen Begriff "Kindeswohl" wirken die bereits angesprochenen, unqualifizierten Behörden, Beistände und weitere Helfershelfer der gutverdienenden und entsprechend geölten Scheidungsmafia. Sie merken allzu oft nicht, wie sie die bösartigen Mütter in ihren verwerflichen Absichten geradezu noch unterstützen.
                <br />
                <br />
               Oder wie ist es anders zu verstehen, dass das Umgangsrecht willkürlich mit völlig unrealistischen Begründungen eingeschränkt werden, statt diese nach Kräften zu fördern und Kinder wie Väter vor widernatürlichen Verhältnissen zu schützen?
                <br />
                <br />
                Daneben geraten Väter, die derart durch ihre Frauen "entsorgt" wurden, oft in die Mühlen von Justiz und anderen Behörden. Einäugige Beamte, Sozialarbeiter(!) und weitere "Helfer" des verkrusteten Sozialapparates begegnen den durch vorausgegangene Akte der Ungerechtigkeit bereits stigmatisierten Vätern mit menschenverachtender, atemberaubender Arroganz.
                <br />
                <br />
                Diese Behörden behindern sich dabei nach Kräften gegenseitig. Die Betroffenen werden Schikanen ausgesetzt, Unverständnis begegnet ihnen auf Schritt und Tritt. Erniedrigrende Sätze wie "Sie müssen sich halt mit Ihrer Frau arrangieren" gehören zum Standard-Repertoire von solchen Schreibtischtätern. Rückzug auf die ureigensten Bedürfnisse und sogar deviantes (abweichendes, kriminelles) Verhalten der derart Betroffenen sind eine logische, aber tragische Folge.
                <br />
                <br />
                Diese menschenverachtende Unart der strukturellen Gewalt, diese mehr als fragliche Tradition, hat in einem Land wie der Schweiz, das auf seine humanitäre Tradition so sehr Wert legt, keine Existenzberechtigung; sie muss mit allen Mitteln durchbrochen und bekämpft werden!
              </p>
            </Col>
            <Col md='4' className='ColG'>
              <center>
                <h4 className='h4' >
                  <strong>Psychische Gewalt</strong>
                </h4>
              </center>
              <center>
                <img src={Psych} className='img' alt='Psych' />
              </center>
              <p>
              Die ungewollte Trennung von Vater und Kind ist psychische Gewalt! Diesen Zusammenhang realisieren viele Väter und damit Männer bis anhin kaum. Sie müssen entgegen ihrer Sozialisation, in der sie gelernt haben, Frauen gegenüber den Stärkeren zu markieren, jetzt das Gegenteil akzeptieren; nämlich, dass sie Opfer von weiblicher Gewalt geworden sind. Das ist verständlicherweise ein Schritt, den viele Männer nicht nachvollziehen können oder wollen.
                <br />
                <br />
                Neben den körperlichen Übergriffen finden übelste Beschimpfungen und massive Drohungen beliebte Verwendung. Eine der bekanntesten Drohungenist diejenige des Entzugs des Umgangs mit den Kindern im Fall einer Trennung. Davor ist bemerkenswerterweise kein Berufsstand gefeit - im Gegenteil, ich stelle fest, dass Lehrerinnen, Sozialpädagoginnen, Sozialarbeiterinnen, Psychologinnen, Psychiaterinnen, Ärztinnen, Theologinnen und andere Berufsangehörige, die sich eigentlich der Folgen ihres verwerflichen Tuns in besonderem Mass bewusst sein müssten, die allerschlimmsten Entfremderinnen sind.
                Diese psychische Gewalt setzt sich fort, indem es den Frauen gelingt, die bekanntermassen sexistisch eingestellten Richter und oft genug die feministischen Richterinnen von der vermeintlichen Gefahr ihrer Männer zu überzeugen. Es findet also eine Umdrehung der realen Gegebenheiten statt! Die Folgen solch verdrehter Darstellungen sind Obhuts- resp. Sorgerechtsübertragung für die gemeinsamen Kinder auf die Mutter, die als vermeintliches Opfer da steht, sowie Hausverbote und weitere Gemeinheiten. Gerade Väter, die als Hausmänner gearbeitet haben, verlieren dadurch auf einen Schlag sowohl das Dach über dem Kopf als auch die Arbeitsstelle. Die beiden grundlegendsten Bedürfnisse jeder menschlichen Existenz werden ihnen damit durch staatliche Organe entzogen! Totaler Kontaktverlust, der Abstieg in tiefere und tiefste Schichten, Sozialhilfeabhängigkeit folgen. Der Staat wirkt somit als Förderer von Desintegration.
                <br />
                <br />
                Die Umgangsverweigerung wird von den Müttern derart rigoros praktiziert, dass sie den Vätern teilweise über viele Jahre den Umgang mit deren Kindern erschweren oder sogar vollständig verunmöglichen. Anleitungen zu solch verwerflichem Handeln werden von rücksichts- und gewissenlosen Anwälten ganz gezielt gehandelt, resp. teuer verkauft. Nicht auszuschliessen ist, dass Richter und Anwälte hintenherum gemeinsame Sache machen. Entsprechende Aussagen von Anwälten, die naturgemäss nicht genannt werden wollen, liegen mir jedenfalls vor. Deshalb spreche ich in diesem Zusammenhang von mafiaähnlichen Strukturen. Als instrumentalisierte Hilfspersonen in diesem skandalösen Trauerspiel kommen noch Beistände dazu, die sehr oft über keinerlei sozialwissenschaftliche Ausbildung verfügen und daher keine Ahnung haben vom korrekten Umgang mit heiklen familiären Situationen. Das seit 2013 gültige Erwachsenenschutzgesetz, das auch Minderjährige berücksichtigt, spricht lediglich davon, dass Beistände persönlich und fachlich geeignet sein müssen, von der dringenden Forderung nach Professionellen fehlt nach wie vor jede Spur.
                <br />
                <br />
                Diese bewusst in Kauf genommene, boshafte Umgangsverweigerung, die notabene von den Richtern und Richterinnen hier zu Lande in keiner Weise geahndet, ja sogar geduldet und durch ihr Handeln noch gefördert wird, kann sowohl bei den betroffenen Kindern als auch Vätern zu schwersten psychischen Belastungen und entsprechenden Schäden führen. Wie aus zahlreichen Arbeiten hervorgeht, ist für eine gesunde Entwicklung der Kinder der anteilsmässig gleich grosse Umgang sowohl mit dem Vater wie mit der Mutter unabdingbar. Diese Erkenntnis wird aber von den Herrschenden mit Füssen getreten. Und wie die Erfahrung zeigt, droht den Vätern im schlimmsten Fall sogar Invalidität. Denn der Schmerz der Trennung von ihren Kindern ist nur mit dem Schmerz aus brutalster Folter vergleichbar.
              </p>
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
