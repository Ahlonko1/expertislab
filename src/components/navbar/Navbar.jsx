import React from 'react';
import "./navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import Logo from "../../assets/logowhite.jpg"

// const menuBtn = document.querySelector("#menu-btn")
// const closeBtn = document.querySelector("#close-btn")
// const menu = document.querySelector("navbar .container ul")

// menuBtn.addEventListener("click", () =>{
//   menu.style.display = "block";
//   menuBtn.style.display = "none";
//   closeBtn.style.display = "inline-block";
// })

// closeBtn.addEventListener("click", () =>{
//   menu.style.display = "none";
//   menuBtn.style.display = "inline-block";
//   closeBtn.style.display = "none";
// })

// const navItems = menu.querySelectorAll("li")

// const changeActiveItem = () =>
//   navItems.forEach(item => {
//     const link = item.querySelector("a");
//     link.classList.remove("active");
//   })
// }

// navItems.forEach(item => {
//   const link = item.querySelector("a");
//   link.addEventListener("click", () => {
//     changeActiveItem();
//     link.classList.add("active");
//   })

// });

const Navbar = () => {
  return (
    <navbar>
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
