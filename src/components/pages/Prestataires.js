import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires4 from '../Prestataires/BarPrestataires/BarPrestataires4';
import Prestataire from '../Prestataires/Prestataire/Prestataire';

export default function Prestataires() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires4/>
       <Prestataire/>
    </>
  );
}