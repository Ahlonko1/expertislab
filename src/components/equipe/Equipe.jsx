import React from 'react'
import "./equipe.css";

const Equipe = () => {
  return (
    <section id="equipe">
      <div className="container equipe__container">
      <h1>NOTRE EQUIPE</h1>
        <div className="equipe">
          <article className='equipe__card'>
            <h2>Benjamin BAUCHET</h2>
            <h3>EXPERT</h3>
          </article>
          <article className='equipe__card'>
            <h2>Bruce BONNAURE</h2>
            <h3>EXPERT JUDICIAIRE</h3>
          </article>
          <article className='equipe__card'>
            <h2>Nicolas GONIN</h2>
            <h3>EXPERT</h3>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Equipe
