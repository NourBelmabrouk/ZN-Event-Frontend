/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
             <div className='cards__item__info'>
                <img
                   className='cards__item__img '
                   alt='Prestataire'
                   src={props.src}
                />
                <h5 className='cards__item__text'>{props.text}</h5>
             </div>
          </figure> 
        </Link>
      </li>
    </>
  );
}

export default CardItem;