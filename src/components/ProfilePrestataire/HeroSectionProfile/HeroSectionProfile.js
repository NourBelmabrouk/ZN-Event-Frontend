import React from 'react';
import '../../../App.css';
import { Button } from '../../Button/Button';
import './HeroSectionProfile.css';

function HeroSectionProfile() {
  return (
    <div className='hero-containerProfile'> 
      <img src='/images/accueil.jpg' alt='' />
      <h1>MON  COMPTE</h1>
      <p>TABLEAU DE  BORD</p>
      <div className='hero-boutonsParam'>
        <Button
          className='boutonsParam'
          buttonStyle='bouton--primary'
          buttonSize='bouton--large'
          onClick={()=> localStorage.removeItem("user")}
          link='/'

        >
          Déconnecter  &nbsp; <i className="fa fa-arrow-right" />
        </Button>
      </div>
    </div>
    
  );
}

export default HeroSectionProfile;