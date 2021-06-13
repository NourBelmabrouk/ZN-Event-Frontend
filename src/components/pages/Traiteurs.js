import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires2 from '../Prestataires/BarPrestataires/BarPrestataires2';
import Menu from '../Prestataires/Menu/Menu';

export default function Traiteurs() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires2/>
       <Menu/>
    </>
  );
}