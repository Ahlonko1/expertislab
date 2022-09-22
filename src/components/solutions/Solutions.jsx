import React from 'react'
import "./solutions.css";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const Solutions = () => {
  return (
    <section id="solutions">
      <div className='container solutions__container'>
        <h1>NOTRE OFFRE</h1>
        <h4>Nos experts vous proposent un accompagnement adapté à vos enjeux structurants et stratégiques.</h4>
        <div className="solutions">
          <article className="solution__card">
            <h3>Expertise de vote <br></br>électronique<br></br><HiOutlineArrowNarrowRight/></h3>
          </article>
          <article className="solution__card">
            <h3>Constat Ordonnance Art.145 <br></br>et Saisie Contrefaçon<br></br><HiOutlineArrowNarrowRight/></h3>
          </article>
          <article className="solution__card">
            <h3>Conseil – Assistance Technique <br></br>et Contentieux<br></br><HiOutlineArrowNarrowRight/></h3>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Solutions
