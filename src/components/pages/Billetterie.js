import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires7 from '../Prestataires/BarPrestataires/BarPrestataires7';
import Billetteries from '../Prestataires/Billeterie/Billeteries';

export default function Billetterie() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires7/>
       <Billetteries/>
    </>
  );
}