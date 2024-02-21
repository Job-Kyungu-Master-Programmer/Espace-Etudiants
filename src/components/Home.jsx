import React from 'react'
import us from '../images/free.jpg'

const Home = () => {
  return (
    <div className="home">
        <h1 className="home__title">Espace d'Etudiant</h1>
        <p className="home__content">
        Eduroam (education roaming ou, en français, l’éducation itinérante) est un service international 
        qui permet une connexion sécurisée sans fil à Internet dans des établissements d’enseignement et de recherche partout au Canada et sur tous les continents.  
        </p>
        <p className="home__content">
        En tant que membre de la communauté universitaire, vous avez accès au réseau sans fil eduroam. Cet accès, gratuit, 
        requiert une connexion avec votre IDUL@ulaval.ca et votre mot de passe. Il s'agit du réseau sans fil à privilégier sur le campus pour effectuer vos activités en ligne de façon sécuritaire et bénéficier d'une meilleure performance. 
        </p>
        <div className="home__image">
            <img src={us} alt="" className="home__img" />
        </div>

    </div>
  )
}

export default Home
