import React from 'react'
import "./constat.css";
import {VscSymbolMethod} from "react-icons/vsc";
import {FaStopwatch} from "react-icons/fa";
import {GoLaw} from "react-icons/go";

const Constat = () => {
  return (
    <div className='container constat__container'>
      <div className='constat__intro'>
        <h1>Constat Art.145 et Saisie-contrefaçon</h1>
        <h5>Qu’il s’agisse de concurrence déloyale, de débauchage, de fuite de données, de dénigrement ou de contrefaçon, les ordonnances art.145 ou de saisie-contrefaçon font régulièrement état de la nécessité de rechercher puis de préserver des preuves informatiques et numériques pouvant provenir d’une grande variété de dispositifs.</h5>
      </div>
      <h2>Vos principaux enjeux</h2>
      <div className='constat__enjeux'>

        <div className='enjeu__card'>
          <h3>Être assistés durant vos opérations de constat ou de saisie</h3>
          <h5>Nos experts assistent les Huissiers instrumentaires durant leurs opérations de constatation, afin de procéder, sous leur contrôle et dans le respect de l’ordonnance rendue par les Magistrats, aux recherches, extractions et copies des éléments de preuve sur des supports sécurisés.</h5>
        </div>
        <div className='enjeu__card'>
          <h3>Trouver les éléments de preuve</h3>
          <h5>Notre connaissance des environnements informatiques complexes et de leurs évolutions (ERP, CRM, Bases de données, Solutions Cloud, Smartphones, Tablettes…), associée à nos outils d’analyse Forensique nous permettent de réaliser les investigations numériques sur tout type de dispositifs informatiques. Nos outils offrent également la possibilité de procéder au tri et à la suppression des informations protégées ou à caractère personnel.</h5>
        </div>

        <div className='enjeu__card'>
          <h3>Organiser et exécuter votre mission</h3>
          <h5>Nous nous appuyons sur une structure flexible et réactive, des méthodologies éprouvées et des connaissances partagées entre tous nos experts afin de vous proposer un dispositif sur mesure qui réponde à l’ensemble de vos contraintes (Délais procéduraux, Intervention multisite sur tout le territoire, Environnements techniques variés…).</h5>
        </div>

        <div className='enjeu__card'>
          <h3>Exploiter les éléments de preuve</h3>
          <h5>A l’issu des opérations de constat, l’ensemble des opérations techniques est systématiquement détaillé dans une note technique d’intervention et nous réalisons un inventaire dynamique facilitant l’accès et l’analyse des pièces saisies ou séquestrées.</h5>
        </div>

        <div className='enjeu__card2'>
          <h3>Maîtriser vos coûts</h3>
          <h5>Toutes nos prestations d’accompagnement se font sur la base d’une étude détaillée de l’ordonnance rendue par les magistrats. Dans une volonté de transparence envers vous et vos clients nous proposons une estimation du temps et des frais que nous pensons affecter à l’exécution de notre mission.</h5>
        </div>
      </div>
      <h2>+600 accompagnements constats et saisies | +20 ans d'expérience | 4 experts à votre service</h2>

      <div className='constat__accompagnement'>
          <article className='accompagnement__card'>
            <VscSymbolMethod className='accompagnement__icon'/>
            <h4>Conseil sur la rédaction de vos requêtes</h4>
            <h5>Forts de notre expérience nous sommes en mesure de vous apporter notre conseil dans la rédaction des recherches informatiques que vous envisagez dans vos projets de requêtes.
                L’environnement informatique visé, la typologie des données recherchées et la sélection fine et pertinente de mots clés, garantiront une probabilité accrue de succès à vos opérations de constat ou de saisie.</h5>
          </article>
          <article className='accompagnement__card'>
            <FaStopwatch className='accompagnement__icon'/>
            <h4>Organisations d’opérations complexes </h4>
            <h5>Structurés autour de plusieurs experts nous sommes en mesure d’organiser et de superviser, pour vous, des opérations de constat ou de saisie sur plusieurs sites simultanément et sur tout le territoire. Nos experts se coordonnent alors pour garantir la plus grande réussite possible de la mission que vous nous confiez.</h5>
          </article>
          <article className='accompagnement__card'>
            <GoLaw className='accompagnement__icon'/>
            <h4>Levée de séquestre</h4>
            <h5>Nous pouvons accompagner les Huissiers ainsi que les parties et leurs conseils au cours de la procédure du contradictoire durant les opérations de tris des éléments de preuve consécutive à la levée du séquestre.</h5>
          </article>
      </div>

      <div className="constat__faq">
        <h3>Questions fréquentes sur le vote électronique</h3>
        <div className='faq__item'>
          <h4>Les supports numériques sont -ils fournis ?</h4>
          <h5>Oui. Toutes nos prestations d’assistance sont effectuées par nos experts qui se déplacent avec l’ensemble du matériel nécessaire (supports, outils d’investigation et outils de copie).</h5>
        </div>
        <div className='faq__item'>
          <h4>Quels sont les délais de traitement d’une demande d’assistance ?</h4>
          <h5>Nos délais de traitement sont extrêmement rapides. A réception de l’ordonnance délivrée par le Magistrat nous sommes en mesure de vous proposer un devis détaillant notre prestation et nos conditions tarifaires sous 24 à 48 heures.</h5>
        </div>
        <div className='faq__item'>
          <h4>Les données saisies sont-elles sécurisées ?</h4>
          <h5>Oui. Toutes les données que nous pourrions être amenés à extraire et à copier à l’issu des opérations de constat ou de saisie ou bien lors de traitements différés sont copiées à l’intérieur de conteneurs chiffrés dont la clés de déchiffrement n’est connue que de nous et des Huissiers de Justice.</h5>
        </div>
        <div className='faq__item'>
          <h4>Avez-vous un conflit d’intérêts ?</h4>
          <h5>C’est la règle d’or chez EXPERTIS Lab. Avant de vous proposer un devis détaillée nous vérifions au sein de notre base de données interne l’existence d’un possible conflit d’intérêts. Le cas échéant nous ne pouvons vous accompagner durant votre projet de constat ou de saisie.</h5>
        </div>
      </div>

    </div>
  )
}

export default Constat
