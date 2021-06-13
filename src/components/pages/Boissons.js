import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires3 from '../Prestataires/BarPrestataires/BarPrestataires3';
import Boisson from '../Prestataires/Boisson/Boisson';

export default function Boissons() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires3/>
       <Boisson/>
    </>
  );
}