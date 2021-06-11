import React from 'react';
import '../../App.css';
import HeroSection from '../Home/HeroSection/HeroSection';
import FormEvent from '../Home/FormEvent/FormEvent';
import Cards from '../Home/CardsPrestatires/Cards';
import Concept from '../Home/Concept/Concept';
import ContactUS from '../Home/ContactUs/ContactUS';

function Home() {
  return (
    <>
      <HeroSection />
      <FormEvent/>
      <Cards/>
      <ContactUS/>
      <Concept/>
    </>
  );
}

export default Home;