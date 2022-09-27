import React from 'react'
import "./equipe.css";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import NICO from "../../assets/Nico.jpg";
import Benj from "../../assets/Benj.jpg";
import Bruce from "../../assets/Bruce.jpg"

const Equipe = () => {
  return (
    <section id="equipe">
      <div className="container equipe__container">
      <h1>NOTRE EQUIPE</h1>
        <div className="equipe">
          <article className='equipe__card'>
            <div className='photo'>
              <img src={Benj} alt="photo" />
            </div>
            <h2>Benjamin BAUCHET</h2>
            <h3>EXPERT</h3>
            <h5><HiOutlineArrowNarrowRight/> fiche contact</h5>
          </article>
          <article className='equipe__card'>
            <div className='photo'>
              <img src={Bruce} alt="photo" />
            </div>
            <h2>Bruce BONNAURE</h2>
            <h3>EXPERT JUDICIAIRE</h3>
            <h5><HiOutlineArrowNarrowRight/> fiche contact</h5>
          </article>
          <article className='equipe__card'>
            <div className='photo'>
              <img src={NICO} alt="photo" />
            </div>
            <h2>Nicolas GONIN</h2>
            <h3>EXPERT</h3>
            <h5><HiOutlineArrowNarrowRight/> fiche contact</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Equipe
