import React from 'react'
import "./expertise.css";
import {VscSymbolMethod} from "react-icons/vsc";
import {FaStopwatch} from "react-icons/fa";
import {GoLaw} from "react-icons/go";
import {GiOnTarget} from "react-icons/gi";

const Expertise = () => {
  return (
    <div className='container expertise__container'>
      <div className='expertise__intro'>
        <h1>Expertise indépendante de vote électronique</h1>
        <h5>Depuis plus de 10 ans, notre expertise des systèmes de vote électronique consiste à apprécier la conformité, de l’ensemble des dispositifs et des conditions de déroulement d’une élection aux dispositions légales, aux préconisations de la CNIL en la matière, et aux règles particulières s’appliquant à cette élection.</h5>
      </div>
      <h2>Vos principaux enjeux</h2>
      <div className='expertise__enjeux'>

        <div className='enjeu__card'>
          <h3>Vérifier la conformité de votre dispositif.</h3>
          <h5>Nous réalisons des expertises indépendantes de dispositifs de vote, conformément aux préconisations de la CNIL (Recommandation n° 2019-053 du 25 avril 2019) afin de vérifier la conformité de vos dispositifs aux exigences juridiques, techniques et de sécurité.</h5>
        </div>
        <div className='enjeu__card'>
          <h3>Respecter vos délais et votre calendrier électoral.</h3>
          <h5>Nous procédons à nos travaux d’expertise et de rédaction du rapport en collaboration avec vos équipes en charge du scrutin afin de nous inscrire dans votre calendrier électoral.
          Nos expertises sont menées directement auprès de vos prestataires de vote à la suite de vos travaux de paramétrage. Nos équipes s’occupent de tout pour vous et restent à votre disposition durant le processus d’expertise.</h5>
        </div>
        <div className='enjeu__card'>
          <h3>Apprécier la robustesse de votre système de vote.</h3>
          <h5>Nous pouvons procéder à des tests de vulnérabilité (type OWASP) et d’intrusions spécifiques afin de contrôler la résistance de vos dispositifs de vote aux tentatives d’intrusions extérieures.</h5>
        </div>
        <div className='enjeu__card'>
          <h3>Limiter les risques de recours et d’annulation.</h3>
          <h5>Nos années d’expérience et la connaissances de la jurisprudence permettent à nos experts de vous accompagner durant tout votre processus électoral.
          Depuis les réflexions à mener en amont des élections (parcours d’authentification, procédure de réassort et code Défi) jusqu’à la gestion des aléas et leurs conséquences pouvant survenir en cours de vote.</h5>
        </div>
        <div className='enjeu__card'>
            <h3>Fédérer autour de votre système de vote.</h3>
            <h5>Nos travaux d’expertise permettent aux organisateurs de scrutin de fédérer autour de la solution de vote dématérialisée et d’instaurer un climat de confiance entre toutes les parties prenantes (organisation syndicales, Ressources Humaines, Direction des systèmes d’informations…).</h5>
        </div>
      </div>
        <h2>+500 clients | +1000 votes expertisés | +10 ans d'expérience</h2>
      <div className='expertise__accompagnement'>
          <article className='accompagnement__card'>
            <VscSymbolMethod className='accompagnement__icon'/>
            <h4>Procédures d’appel d’offres et réflexions pré-électorales</h4>
            <h5>Nos experts vous accompagnent en amont de vos procédures d’appel d’offres et en assistance de votre maîtrise d’ouvrage durant la rédaction de vos CCTP.
                Nous n’intervenons jamais dans le choix final de votre solution, nous ne sommes pas juge et partie.</h5>
          </article>
          <article className='accompagnement__card'>
            <FaStopwatch className='accompagnement__icon'/>
            <h4>Vote en assemblée générale en direct </h4>
            <h5>Nous sommes en mesure de vous accompagner dans la supervision d’un vote en direct en assemblée générale (opérations de descellement et de dépouillement de l’urne, conservation de l’environnement de vote et des éléments de traçabilité).</h5>
          </article>
          <article className='accompagnement__card'>
            <GoLaw className='accompagnement__icon'/>
            <h4>Vote complexe « Multi-canal » </h4>
            <h5>Votre élection se déroule selon un processus « Multi-canal », vote papier à l’urne et solution dématérialisée ?
                Aucun problème, nos experts possèdent la connaissance de ces dispositifs complexes.</h5>
          </article>
          <article className='accompagnement__card'>
            <GiOnTarget className='accompagnement__icon'/>
            <h4>Participation et présentation aux instances </h4>
            <h5>Vous souhaitez la présence d’un de nos experts durant une ou toutes les grandes cérémonies de votre processus électoral (présentation de la solution aux parties prenantes, scellement, supervision du vote ou descellement) ou pour présenter les résultats de notre expertise devant les instances ?
                Nous sommes encore une fois en mesure de répondre à toutes ces demandes.</h5>
          </article>
      </div>

      <div className='expertise__faq'>
        <h3>Questions fréquentes sur le vote électronique</h3>
        <div className='faq__item'>
          <h4>Quelle est la date de remise du rapport ?</h4>
          <h5>La remise du rapport d’expertise du dispositif de vote électronique intervient de manière générale entre la date de scellement de l’urne et celle du 1er tour.
        En effet, nos travaux sont finalisés sur une plateforme dite « figée » incluant toutes les données et paramétrages nécessaires aux votes.</h5>
        </div>
        <div className='faq__item'>
          <h4>Une conformité partielle ou une non-conformité m’empêchent elles de procéder au vote ?</h4>
          <h5>Non. Une conformité partielle ou une non-conformité que nous pourrions être amenés à observer ne vous empêche pas de voter. Dès lors vous rentrez dans un processus de gestion du risque contentieux.</h5>
        </div>
        <div className='faq__item'>
          <h4>L’Expert doit-il être présent durant tout mon processus électoral ?</h4>
          <h5>Non. Aucune obligation légale n’oblige l’expert à être présent durant tout le processus électoral. Cependant nous pouvons vous proposer cet accompagnement sur mesure si vous le désirez.</h5>
        </div>
        <div className='faq__item'>
          <h4>Mon rapport d’expertise doit-il être transmis à l’ensemble des parties prenantes ?</h4>
          <h5>Non aucune obligation légale ne vous oblige à diffuser le rapport d’expertise. Le rapport d’expertise s’adresse aux organisateurs de scrutin et vous appartient. En revanche, rien ne vous empêche, par souci de transparence, à communiquer ce rapport à l’ensemble des parties prenantes.</h5>
        </div>
      </div>

    </div>
  )
}

export default Expertise
