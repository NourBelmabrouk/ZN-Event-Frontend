import React from 'react';
import '../../App.css';
import HeroSectionPrestataires from '../Prestataires/HeroSectionPrestataire/HeroSectionPrestataire';
import BarPrestataires1 from '../Prestataires/BarPrestataires/BarPrestataires1';
import Lieu from '../Prestataires/Lieux/Lieu';

export default function Lieux() {
  return(
    <>
       <HeroSectionPrestataires/>
       <BarPrestataires1/>
       <Lieu/>
    </>
  );
}