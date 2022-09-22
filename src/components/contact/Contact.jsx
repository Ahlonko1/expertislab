import React from 'react'
import "./contact.css";
import {MdLocationPin} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <h1>NOUS CONTACTER</h1>
        <div className='contact__container'>
          <div className="contact__infos">
            <h4><MdLocationPin className='info-icon'/> 30 rue Sedaine 75011 PARIS</h4>
            <h4><AiFillPhone className='info-icon'/> 01 45 35 24 00</h4>
          </div>

          <form action="">
            {/* <div className='un'> */}
              <input type="text" name="prenom" placeholder='Prénom' required/>
              <input type="text" name="nom" placeholder='Nom' required/>
            {/* </div> */}
            {/* <div className='deux'> */}
              <input type="text" name="entreprise" placeholder='Entreprise' required/>
              <input type="text" name="objet" placeholder='Objet' required/>
            {/* </div> */}
            {/* <div className='trois'> */}
              <input type="text" name="email" placeholder='Email' required/>
              <input type="text" name="telephone" placeholder='Téléphone' required/>
            {/* </div> */}
            {/* <div className='quatre'> */}
              <textarea name="message" rows="7" placeholder='Message' required></textarea>
            {/* </div> */}
            <button type='submit' className='btn btn-primary'>Envoyer</button>
          </form>
        </div>
        </div>
    </section>
  )
}

export default Contact
