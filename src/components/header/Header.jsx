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
          <h5>Nous sommes spécialisés dans la gestion de vos risques<br></br> contentieux, la gestion de la preuve, le traitement des données sensibles,<br></br>  les systèmesd’informations complexes ainsi que les systèmes <br></br> de vote électronique.</h5>
          <h5>Outre notre laboratoire d’analyses forensique et nos outils méthodologiques,<br></br> la société dispose de ressources humaines dont l’expertise technique<br></br> permet à la fois une complémentarité des compétences et une garantie<br></br> en matière de disponibilité et de réactivité aux services de vos besoins.</h5>
          <CTA/>
        </div>
        <div className='image'>
          <img src={graph} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
