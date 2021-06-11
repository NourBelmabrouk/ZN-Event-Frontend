import React, { useState} from 'react';
import '../../../App.css';
import SignUp from '../authentication_forms/SignUp';
import { Button } from '../../Button/Button';
import './HeroSection.css';
import Popup from '../../Popup/Popup';
import ScrollAnimation from 'react-animate-on-scroll';




function HeroSection() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='hero-container'> 
      <img src='/images/accueil.jpg' alt='' />
      <img src='/images/logo.png' alt='' className='logo-name'/>
      <h1>ORGANISER &nbsp;MON&nbsp; ÉVÉNEMENT</h1>
      <p>LIEU&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;MENU&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;PRESTATAIRES&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;COMMUNICATION&nbsp;&nbsp;<span className='tire'>-</span>&nbsp;&nbsp;BILLETTERIE</p>
      <div className='hero-boutons'>
        <Button
          className='boutons'
          buttonStyle='bouton--outline'
          buttonSize='bouton--large'
          onClick={ () => setButtonPopup(true)}
        >
          S'inscrire
        </Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} onRequestClose={() => setButtonPopup(false)}>
               <SignUp/>
        </Popup>
        <ScrollAnimation animateIn="fadeIn">

        <Button
          className='boutons'
          buttonStyle='bouton--primary'
          buttonSize='bouton--large'
          link='/CommentCaMarche'
        >
          COMMENT ÇA MARCHE <i className="fa fa-info-circle" />
        </Button>
        
        </ScrollAnimation>
      </div>
     
      
    </div>
    
  );
}

export default HeroSection;