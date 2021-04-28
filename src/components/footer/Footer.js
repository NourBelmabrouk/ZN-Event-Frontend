import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Rejoignez ZN Event pour recevoir nos meilleures offres
        </p>
        <p className='footer-subscription-text'>
          Vous pouvez vous désabonner à tout moment.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='bouton--outline'>S'abonner</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='titre'>A propos de ZN EVENT</h2>
            <Link to='/'>Nous contacter</Link>
            <Link to='/'>Qui sommes-nous?</Link>
            <Link to='/'>Comment ça marche</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='titre'>Actualités</h2>
            <Link to='/'>Le blog de ZN Event</Link>
            <Link to='/'>Les derniers événements</Link>
          </div>
        
          <div className='footer-link-items'>
            <h2 className='titre'>Lire la suite</h2>
            <Link to='/'>CGU Billeterie</Link>
            <Link to='/'>CGU Participants</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='titre'>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ZN EVENT
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>ZN EVENT © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;