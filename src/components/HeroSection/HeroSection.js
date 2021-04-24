import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'> 
      <img src='/images/accueil.jpg' alt='' />
      <img src='/images/logo.png' alt='' className='logo-name'/>
      <h1>ORGANISER &nbsp;MON&nbsp; ÉVÉNEMENT</h1>
      <p>LIEU&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;MENU&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;PRESTATAIRES&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;COMMUNICATION&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;BILLETTERIE</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          S'inscrire
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          COMMENT ÇA MARCHE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    
  );
}

export default HeroSection;