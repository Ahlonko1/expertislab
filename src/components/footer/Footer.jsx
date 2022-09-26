import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='container2'>
        <a href="#" className='footer__logo'><h1>Expertis<i>LAB</i></h1></a>

        <div className="footer__copyright">
          <small>&copy; Expertis Lab | Tous droits réservés</small>
        </div>

        <div className='footer__autres'>
          <h5>Mentions légales | RGPD</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer
