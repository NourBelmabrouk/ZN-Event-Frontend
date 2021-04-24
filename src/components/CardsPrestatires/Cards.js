import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Consultez Nos Prestataires</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/lieux.jpg'
              text='LIEUX'
              path='/Lieux'
            />
            <CardItem
              src='/images/traiteur_carré.png'
              text='TRAITEURS'
              path='/Traiteurs'
            />
            <CardItem
              src='/images/animation.jpg'
              text='ANIMATION'
              path='/Animation'
            />
          </ul>
          <ul className='cards__items '>
            <CardItem
              src='/images/communication_carré.jpg'
              text='COMMUNICATION'
              path='/Communication'
            />
            <CardItem
              src='/images/prestataire.jpg'
              text='PRESTATAIRES'
              path='/Prestataires'
            />
            <CardItem
              src='/images/package.jpg'
              text='PACKAGES'
              path='/Packages'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;