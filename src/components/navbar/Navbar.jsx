import React, {useState} from 'react';
import "./navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import Logo from "../../assets/LOGO-Elab_MARINE.jpg";
import {Link} from "react-scroll";


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <navbar>
      <div className='container2'>
        <div className='logo'>
        <img src={Logo} alt="" />
        </div>
        <ul className={click ? "nav__menu active" : 'nav__menu'}>
          <li ><Link to="#" spy={true} smooth={true} offset={-100} duration={700} className='active'></Link></li>
          <li className='nav__item'><Link to="presentation" spy={true} smooth={true} offset={-100} duration={700} className="nav__link" >QUI SOMMES-NOUS</Link></li>
          <li className='nav__item'><Link to="solutions" spy={true} smooth={true} offset={-100} duration={700} className="nav__link" >NOTRE OFFRE</Link></li>
          <li className='nav__item'><Link to="equipe" spy={true} smooth={true} offset={-100} duration={700} className="nav__link" >NOTRE EQUIPE</Link></li>
          <li className='nav__item'><Link to="contact" spy={true} smooth={true} offset={-100} duration={700} className="nav__link">NOUS CONTACTER</Link></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<AiOutlineClose />) : (<AiOutlineMenu />)}
        </div>
      </div>
    </navbar>
  )
}


export default Navbar
