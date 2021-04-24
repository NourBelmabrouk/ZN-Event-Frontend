import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import FormEvent from '../FormEvent/FormEvent';
import Cards from '../CardsPrestatires/Cards';
import Footer from '../footer/Footer';
import Concept from '../Concept/Concept';
import ContactUS from '../ContactUs/ContactUS';

function Home() {
  return (
    <>
      <HeroSection />
      <FormEvent/>
      <Cards/>
      <ContactUS/>
      <Concept/>
      <Footer/>
    </>
  );
}

export default Home;