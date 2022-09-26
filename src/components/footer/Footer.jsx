import React from 'react'
import "./footer.css"
import Logo from "../../assets/logobleuclair.jpg"


const Footer = () => {
  return (
    <footer>
      <div className='container2'>
        <a href="#" className='footer__logo'><img src={Logo} alt="" /></a>

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
