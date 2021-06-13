import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires5 from '../Prestataires/BarPrestataires/BarPrestataires5';
import Coordinateur from '../Prestataires/Coordinateur/Coordinateur';

export default function Coordinateurs() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires5/>
       <Coordinateur/>
    </>
  );
}