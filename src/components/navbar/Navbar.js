import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import Popup from '../Popup/Popup';
import SignIn from '../Home/authentication_forms/SignIn';
import {render} from "@testing-library/react";
import FichePrestations from "../pages/FichePrestations";
import '../Button/Button.css';
import Prestation from "../../services/prestation.service";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

/* L navbar tbadel l couleur mte3ha*/
const changeBackground = () => {
    if (window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
};

window.addEventListener('scroll', changeBackground);

/* POP up connection */
const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <nav className={navbar ? 'navbarr active' : 'navbarr'}>
        <div className='navbarr-container'>
          <Link to='/' className='navbarr-logo' onClick={closeMobileMenu}>
            <img src='/images/logo.png' alt='' className='logo' />
            ZN EVENT
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navb-menu active' : 'navb-menu'}>

            <li className='navb-iteme'>
              <Link to="/" className='navb-links' onClick={closeMobileMenu}>
              <i className="fa fa-home" />  &nbsp; Home 
              </Link>
            </li>

            <li
            className='navb-iteme'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link href="" className='navb-links'
                onClick={closeMobileMenu}             
              >
                 Nos Prestataires  &nbsp; <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='navb-iteme'>
              <Link
                to='/QuiSommesNous'
                className='navb-links'
                onClick={closeMobileMenu}
              >
                Qui Sommes Nous ?
              </Link>
            </li>

            <li>
              <Link to='/login' className='navb-links-mobile' onClick={closeMobileMenu} >
                Se Connecter 
              </Link>
            </li>
          </ul>

            {localStorage.getItem("user")!=null && localStorage.getItem("user").search("Role_PRESTATAIRE")>0 &&button &&
              <Link to="/FichePrestations"><button className='bouton boutons bouton--outline bouton--large'
                                                   >
                Mon compte</button></Link>}
             {localStorage.getItem("user")==null &&button && <Button className='boutons' buttonStyle='bouton--outline' buttonSize='bouton--large' onClick={ () => setButtonPopup(true)} >Se Connecter </Button>}




          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} onRequestClose={() => setButtonPopup(false)}>
               <SignIn/>
             </Popup>
             
        </div>
      </nav>

    </>
  );
}

export default Navbar;