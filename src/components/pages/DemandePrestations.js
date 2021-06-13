import React from 'react';
import '../../App.css';
import HeroSectionProfile from '../ProfilePrestataire/HeroSectionProfile/HeroSectionProfile';
import BarProfile2 from '../ProfilePrestataire/BarProfile/BarProfile2';
import DemandePrestation from '../ProfilePrestataire/DemandePrestation/DemandePrestation';

function DemandePrestations() {
  return (
    <>
      <HeroSectionProfile/>
      <BarProfile2/>
      <DemandePrestation/>
    </>
  );
}

export default DemandePrestations;