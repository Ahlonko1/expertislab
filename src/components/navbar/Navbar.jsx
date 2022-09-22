import React from 'react';
import "./navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  return (
    <navbar>
      <div className='container'>
        <a href="#"><h1>LOGO</h1></a>
          <ul>
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
