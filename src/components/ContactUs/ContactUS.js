import React from 'react';
import './ContactUS.css';
import {Button} from '../Button/Button';

function ContactUS() {
  return (
    <div className='contact'>

      <h1 className='h1_Contact'>Notre service clients est à votre disposition pour vous conseiller de façon détaillée.</h1>
 
      <div className='contact-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contactez-Nous
        </Button>
      </div>
   
    </div>
  );
}

export default ContactUS;