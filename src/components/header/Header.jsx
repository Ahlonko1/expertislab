import React from 'react'
import "./header.css";
import CTA from "./CTA";
import background from "../../assets/background2.jpg";
import graph from "../../assets/graph.png"

const Header = () => {
  return (
    <header style={{ backgroundImage:`url(${background})`,backgroundSize:"contain" }}>
      <div className="container header__container">
        <div className='intro'>
          <h1>Expertis Lab</h1>
          <h2>cabinet d'expertise indépendant</h2>
          <h4>Nous sommes spécialisés dans la gestion de vos risques contentieux, la gestion de la preuve, le traitement des données sensibles, les systèmesd’informations complexes ainsi que les systèmes de vote électronique.</h4>
          <h4>Outre notre laboratoire d’analyses forensique et nos outils méthodologiques, la société dispose de ressources humaines dont l’expertise technique permet à la fois une complémentarité des compétences et une garantie en matière de disponibilité et de réactivité aux services de vos besoins.</h4>
          <CTA/>
        </div>
      </div>
    </header>
  )
}

export default Header
