import React from 'react';
import "./navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import Logo from "../../assets/LOGO-Elab_MARINE.jpg";
import {useEffect, useState} from "react"


const Navbar = () => {

  const [show, setShow] = useState(true)
  const controlNavbar = () =>{
      if (window.scrollY > 90) {
        setShow(false)
      } else {
        setShow(true)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <navbar className={`nav ${show && 'nav_ok'}`}>
      <div className='container2'>
        <img src={Logo} alt="" />
          <ul>
            <li><a href="#" className='active'></a></li>
            <li><a href="#presentation">QUI SOMMES-NOUS</a></li>
            <li><a href="#solutions">NOTRE OFFRE</a></li>
            <li><a href="#equipe">NOTRE EQUIPE</a></li>
            <li><a href="#contact">NOUS CONTACTER</a></li>
          </ul>
          <button id='menu-btn'><AiOutlineMenu /></button>
          <button id='close-btn'><AiOutlineClose /></button>
      </div>
    </navbar>
  )
}


export default Navbar
