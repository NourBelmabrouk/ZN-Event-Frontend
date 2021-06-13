import React from 'react';
import '../../App.css';
import HeroSectionProfile from '../ProfilePrestataire/HeroSectionProfile/HeroSectionProfile';
import BarProfileEvenement2 from '../ProfileOrganisateur/BarProfileEvenement/BarProfileEvenement2';
import EvenementValide from '../ProfileOrganisateur/EvenementValide/EvenementValide';

function EvenementsValide() {
  return (
    <>
      <HeroSectionProfile/>
      <BarProfileEvenement2/>
      <EvenementValide/>
    </>
  );
}

export default EvenementsValide;