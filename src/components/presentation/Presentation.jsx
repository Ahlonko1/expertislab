import React from 'react'
import "./presentation.css";
import {MdOutlineCheck} from "react-icons/md";
import {VscSymbolMethod} from "react-icons/vsc";
import {FaStopwatch} from "react-icons/fa";
import {GoLaw} from "react-icons/go";
import {GiOnTarget} from "react-icons/gi";

const Presentation = () => {
  return (

    <section id="presentation">
      <div className="container presentation__container">
        <h1>QUI SOMMES-NOUS?</h1>
        <div className='expertises'>
          <h4>Expertis Lab est une société d’expertise 100% indépendante, créée courant 2011 par Bruce Bonnaure, Expert près les tribunaux.</h4>
          <h4>
            Nous possédons <b>une grande expérience</b>, notamment en matière :

            <ul>
              <li>
                <p><MdOutlineCheck className='check'/> <b>d’expertise amiable et technique</b></p>
              </li>
              <li>
                <p><MdOutlineCheck className='check'/> <b>d’assistance à contentieux</b></p>
              </li>
              <li>
                <p><MdOutlineCheck className='check'/> <b>d’intervention d’audit technique et de sécurité</b></p>
              </li>
              <li>
                <p><MdOutlineCheck className='check'/> <b>d’assistance à constat et saisie-contrefaçon</b></p>
              </li>
              <li>
                <p><MdOutlineCheck className='check'/> <b>autre expertise indépendante des systèmes de vote par « internet »</b></p>
              </li>
            </ul>
          </h4>
        </div>
        <h2>Notre savoir-faire</h2>
        <div className='valeurs'>
          <article className='valeur__card'>
            <VscSymbolMethod className='valeur__icon'/>
            <h4>Une méthodologie et des connaissances en mouvement </h4>
            <h5>L’informatique est une matière en mouvement, faite d’innovations constantes, d’évolutions continues et de ruptures technologiques. C’est pourquoi, chez Expertis Lab, en plus d’assurer une vieille technologique continue, nous faisons évoluer nos méthodologies de travail et veillons à ce que nos collaborateurs maîtrisent l’ensemble de ces évolutions.<br></br>Cela afin de vous garantir la plus grande efficacité et le meilleur résultat possible pour la mission que vous nous confierez.</h5>
          </article>
          <article className='valeur__card'>
            <FaStopwatch className='valeur__icon'/>
            <h4>Une réactivité sans égal </h4>
            <h5>Chaque mission que nous sommes amenés à réaliser est différente et possède son lot de subtilités et d’originalités qui lui est propre. Cependant, notre expérience nous a permis d’observer un dénominateur commun, l’urgence. Pas de panique, Expertis Lab, très consciente de l’atmosphère anxiogène que peut créer une situation de contentieux ou bien un devoir règlementaire, vous accompagne aussi dans la gestion de cette situation.<br></br>Notre expérience, notre structure à taille humaine ainsi que nos ressources complémentaires tant en termes de connaissances techniques que métiers nous permettent de mettre le meilleur dispositif possible dans les meilleurs délais afin de mener à bien la mission que vous nous confierez selon vos échéances.</h5>
          </article>
          <article className='valeur__card'>
            <GoLaw className='valeur__icon'/>
            <h4>Confiance et respect des règles de déontologie </h4>
            <h5>La confiance est au cœur de nos considérations, le caractère sensible des missions que vous pourrez nous confier ainsi que les données que nous pourrions traiter nécessitent l’instauration d’un climat de confiance.<br></br>De plus, Expertis Lab ainsi que l’ensemble de ses collaborateurs se conforment aux règles de déontologie élémentaires des Experts judiciaires et s’engagent à respecter une totale confidentialité sur l’ensemble de ses interventions et à ne diffuser aucune information relative à leurs missions.</h5>
          </article>
          <article className='valeur__card'>
            <GiOnTarget className='valeur__icon'/>
            <h4>Un haut degré de qualité sur l’ensemble de toutes nos prestations </h4>
            <h5>L’informatique est un domaine qui, pour la plupart des personnes, représente un long chemin dans le brouillard.<br></br>C’est pour cela que l’ensemble de nos collaborateurs s’impose un degré de qualité très élevé sur toutes leurs productions mais surtout se positionnent à la place du lecteur final afin d’apporter une expertise claire, précise et accessible.</h5>
          </article>

        </div>
      </div>


    </section>
  )
}

export default Presentation
