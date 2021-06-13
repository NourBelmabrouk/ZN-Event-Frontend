import React from 'react';
import '../../App.css';
import HeroSectionProfile from '../ProfilePrestataire/HeroSectionProfile/HeroSectionProfile';
import BarProfileEvenement3 from '../ProfileOrganisateur/BarProfileEvenement/BarProfileEvenement3';
import EvenementTermine from '../ProfileOrganisateur/EvenementTermine/EvenementTermine';

function EvenementsTermine() {
  return (
    <>
      <HeroSectionProfile/>
      <BarProfileEvenement3/>
      <EvenementTermine/>
    </>
  );
}

export default EvenementsTermine;