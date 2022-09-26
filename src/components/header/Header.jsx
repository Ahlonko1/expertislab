import React from 'react'
import "./header.css";
import CTA from "./CTA"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>E x p e r t i s <i>L A B</i></h1><h2>cabinet d'expertise indépendant</h2>
        <div className='intro'>
          <h4>Nous sommes spécialisés dans la gestion de vos risques contentieux, la gestion de la preuve, le traitement des données sensibles, les systèmes d’informations complexes ainsi que les systèmes de vote électronique.</h4>
          <h4>Outre notre laboratoire d’analyses forensique et nos outils méthodologiques, la société dispose de ressources humaines dont l’expertise technique permet à la fois une complémentarité des compétences et une garantie en matière de disponibilité et de réactivité aux services de vos besoins.</h4>
        </div>
        <CTA/>
      </div>
    </header>
  )
}

export default Header
