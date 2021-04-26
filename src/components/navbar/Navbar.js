import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import Popup from "reactjs-popup";
import  SignIn from  "../authentication_forms/SignIn";

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

const changeBackground = () => {
    if (window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
};

window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/logo.png' alt='' className='logo' />
            ZN EVENT
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link
                to='/Cards'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Nos Prestataires <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link
                to='/QuiSommesNous'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Qui Sommes Nous?
              </Link>
            </li>

            <li>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu} >
                Se Connecter
              </Link>
            </li>
          </ul>
          {button &&
            <Popup trigger={<Button  buttonStyle='btn--outline' buttonSize='btn--large'>Se Connecter</Button>}
                   position="center center" modal nested>
          {
            close =>(
            <div >
            <button onClick={close}>
            &times;
            </button>
            <div >
            <SignIn />
            </div>
            </div>
            )
          }
            </Popup>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;