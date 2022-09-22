import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <div className="footer__copyright">
        <small>&copy; Expertis Lab | Tous droits réservés</small>
      </div>

      <div className='footer__autres'>
        <h5>Mentions légales | RGPD</h5>
      </div>
    </footer>
  )
}

export default Footer
