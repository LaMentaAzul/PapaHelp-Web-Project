import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default class HilfePapa extends Component {
  render () {
    return (
      <div>
        <hr />
        <h1>Eine Spende für einen guten Zweck</h1>
        <hr />
        <Container>
          <Row>
            <Col md='12' className='ColD' >
              <p className='purple'>
              Papa-Help.ch gibt es seit bald 20 Jahren. In all' dieser Zeit habe ich die dafür nötigen Auslagen aus meinen eigenen, bescheidenen Mitteln bestritten. Damit das Angebot weiterhin bestehen kann, bin ich nun aber auf Ihre finanzielle Unterstützung angewiesen. Ich bitte Sie daher um eine Spende. Ob gross oder klein - alles ist willkommen! Vielen Dank dafür im voraus.
              </p>
              <br />
              <br />
              <p className='green' >
              Papa-Help.ch soon turns 20. Over this period I have paid the necessary expenses from my own, limited ressources. To maintain the service, I however am now dependent  on your financial support. I therefore ask you for a donation. Be it big or small - anything is welcome! Thanks very much in advance.
              </p>
              <br />
              <div className='Donation'>
                <form action='https://www.paypal.com/cgi-bin/webscr" method="post" target="_top'>
                  <input type='hidden' name='cmd' value='_donations' />
                  <input type='hidden' name='business' value='beratung@papa-help.ch' />
                  <input type='hidden' name='lc' value='CH' />
                  <input type='hidden' name='item_name' value='Papa-Help' />
                  <input type='hidden' name='item_number' value='Donation to Papa Help' />
                  <input type='hidden' name='no_note' value='0' />
                  <input type='hidden' name='currency_code' value='CHF' />
                  <input type='hidden' name='bn' value='PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest' />
                  <center><input type='image' src='https://www.paypalobjects.com/de_DE/CH/i/btn/btn_donateCC_LG.gif' border='0' name='submit' className='Picture' alt='Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.' /></center>
                  <br />  &nbsp;
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
