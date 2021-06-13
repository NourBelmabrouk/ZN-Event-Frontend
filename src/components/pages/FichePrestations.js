import React from 'react';
import '../../App.css';
import HeroSectionProfile from '../ProfilePrestataire/HeroSectionProfile/HeroSectionProfile';
import BarProfile from '../ProfilePrestataire/BarProfile/BarProfile';
import FichePrestation from '../ProfilePrestataire/FichePrestation/FichePrestation';

function FichePrestations() {
  return (
    <>
      <HeroSectionProfile/>
      <BarProfile/>
      <FichePrestation/>
    </>
  );
}

export default FichePrestations;