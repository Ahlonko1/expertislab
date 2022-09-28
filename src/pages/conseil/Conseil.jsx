import React from 'react'
import "./conseil.css";
import {VscSymbolMethod} from "react-icons/vsc";
import {FaStopwatch} from "react-icons/fa";

const Conseil = () => {
  return (
    <div className='container constat__container'>
      <div className='conseil__intro'>
        <h1>Conseil – Assistance Technique et Contentieux</h1>
        <h5>Alors que l’informatique était historiquement cantonné à un rôle d’outil, les Systèmes d’information complexes et interagissant entre eux se trouvent désormais au cœur de toutes les organisations.
        Compte tenu de la complexification des systèmes et du caractère stratégique de la matière informatique et des données numériques, les litiges deviennent ainsi des sujets courants dans la vie des entreprises.
        Partant de ce constat et avec l’objectif de proposer un accompagnement adapté aux acteurs entraînés dans des litiges à caractère technique, Expertis Lab, fort de son expérience accumulée, a construit une offre pour vous aider dans la gestion des contentieux.</h5>
      </div>
      <h2>Vos principaux enjeux</h2>
      <div className='conseil__enjeux'>

        <div className='enjeu__card'>
          <h3>Préservation de la preuve et des éléments litigieux</h3>
          <h5>La donnée informatique s’avère très régulièrement être une source de preuves indispensable dans le cadre d’un contentieux. L’exploitation de cette donnée se doit alors d’être traitée avec beaucoup de précautions afin de lui faire conserver toute sa valeur et son caractère probant. Chez EXPERTIS Lab, nous estimons qu’une étape primordiale est de procéder à la préservation des éléments litigieux, « la copie conservatoire » sous contrôle d’un Huissier de justice. Nous sommes en mesure de vous accompagner pour réaliser cette intervention, et ce quelque soit le dispositif (environnement applicatif complet, poste informatique d’un collaborateur, messageries électroniques, journaux d’événements d’applications d’audit ou métiers…)</h5>
        </div>

        <div className='enjeu__card'>
          <h3>Exploiter les éléments litigieux</h3>
          <h5>En nous appuyant sur notre connaissance de nombreux outils (Suite Microsoft Azure, Exchange, Office 365, Google Workspace, AWS, d’applicatifs d’audit et de sécurité McAfee, Citrix ou ERPs…) et de notre plateforme d’analyse forensique, nous sommes en mesure de vous fournir une assistance pour procéder à l’exploitation d’un grand nombre de données numériques.
          Nos experts spécialisés dans la recherche et l’exploitation de données sous toutes leurs formes (logs, recherches grâce à des combinaisons de mots-clés et de dates sur des volumes importants) sauront vous accompagner et exploiter l’information pour en extraire les éventuels éléments probants afin d’étayer un contentieux.</h5>
        </div>

        <div className='enjeu__card'>
          <h3>Evaluer la qualité d’un projet, de ses réalisations et de l’organisation déployée dans le cadre d’un contentieux</h3>
          <h5>Tout projet informatique, qu’il ait pour but le développement d’une nouvelle solution, l’intégration d’une solution dans un système d’information, le décommissionnement d’une solution ou bien la migration d’une solution à une autre implique des contrats, des ressources, des prérequis, des exigences et des livrables. Durant tout le cycle de vie du projet, les organisations s’exposent au risque d’émergence de contentieux et si celui-ci se matérialise il convient de se préparer rigoureusement au recours judiciaire. EXPERTIS Lab, vous accompagne dans la gestion de ces risques et la mise en place de votre stratégie. Nos experts peuvent, par exmple, évaluer la qualité d’un livrable par rapport à son expression de besoin et au cahier des charges, les conditions de réversibilité et son exécution ou encore l’inadéquation d’une solution et ses dysfonctionnements.</h5>
        </div>

        <div className='enjeu__card'>
          <h3>Être accompagné lors d’une procédure d’expertise judiciaire</h3>
          <h5>L’expertise judiciaire, réalisée à la demande d’un tribunal jugeant un dossier trop complexe en l’état, fait intervenir un expert indépendant nommé pour l’éclairer sur un contentieux en cours. Expertis Lab, fort de l’expérience acquise lors de la réalisation d’expertises judiciaires par l’intermédiaire de son gérant Bruce Bonnaure, expert près les tribunaux, propose un accompagnement sur mesure aux organisations et/ou avocats afin d’éclairer l’Expert nommé par les tribunaux sur les rôles et responsabilités des parties.</h5>
        </div>
      </div>
        <div className='conseil__kpis'>
          <h3 className='kpi'>+400 accompagnements constats et saisies</h3>
          <h3 className='kpi'> +400 missions réalisées</h3>
          <h3 className='kpi2'> +15 000 heures d'accompagnements</h3>
        </div>
      <div className='conseil__accompagnement'>
          <article className='accompagnement__card'>
            <VscSymbolMethod className='accompagnement__icon'/>
            <h4>Conseil sur la rédaction de vos requêtes</h4>
            <h5>Sur la base des travaux de conseil effectués durant la période précontentieuse et forts de notre expérience nous pouvons vous apporter notre conseil pour la mise en œuvre de toute mesure complémentaire notamment en matière de constat sur ordonnance ou de saisie contrefaçon. Nous vous accompagnerons dans la rédaction des recherches informatiques que vous envisagez dans vos projets de requêtes. L’environnement informatique visé, la typologie des données recherchées et la sélection fine et pertinente de mots clés, garantiront une probabilité accrue de succès à vos opérations de constat ou de saisie.</h5>
          </article>
          <article className='accompagnement__card'>
            <FaStopwatch className='accompagnement__icon'/>
            <h4>Organisations de dispositifs Huissiers et Experts</h4>
            <h5>Structurés autour de plusieurs experts et de notre réseau nous sommes en mesure d’organiser et de superviser, pour vous, des opérations de conseil pour lesquelles vous souhaiteriez aussi réaliser des copies conservatoires et que les constations soient consignées dans un procès-verbal d’Huissier. De plus, notre flexibilité nous permet d’organiser ces interventions dans des délais respectant l’urgence de vos dossiers.</h5>
          </article>
      </div>

      <div className="conseil__faq">
      <h3>Questions fréquentes sur le vote électronique</h3>
        <div className='faq__item'>
          <h4>Les supports numériques sont -ils fournis ?</h4>
          <h5>Oui. Toutes nos prestations d’assistance sont effectuées par nos experts qui se déplacent avec l’ensemble du matériel nécessaire (supports, outils d’investigation et outils de copie).</h5>
        </div>
        <div className='faq__item'>
          <h4>Puis je rechercher des données effacées ?</h4>
          <h5>Oui il est tout à fait possible de retrouver des données effacées. Cependant ce type de prestation nécessite un travail de cadrage plus important car certaines données et certains types de dispositifs de stockage de données ne permettent pas ce travail de recherche.</h5>
        </div>
        <div className='faq__item'>
          <h4>Avez-vous un conflit d’intérêts ?</h4>
          <h5>C’est la règle d’or chez EXPERTIS Lab. Avant de vous proposer un devis détaillée nous vérifions au sein de notre base de données interne l’existence d’un possible conflit d’intérêts. Le cas échéant nous ne pouvons vous accompagner durant une prestation de conseil.</h5>
        </div>
      </div>

    </div>
  )
}

export default Conseil
