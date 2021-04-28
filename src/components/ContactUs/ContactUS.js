import React from 'react';
import './ContactUS.css';
import {Button} from '../Button/Button';

function ContactUS() {
  return (
    <div className='contact'>

      <h1 className='h1_Contact'>Notre service clients est à votre disposition pour vous conseiller de façon détaillée.</h1>
 
      <div className='contact-boutons'>
        <Button
          className='boutons'
          buttonStyle='bouton--outline'
          buttonSize='bouton--large'
          link='/Contact'
        >
          Contactez-Nous
        </Button>
      </div>
   
    </div>
  );
}

export default ContactUS;