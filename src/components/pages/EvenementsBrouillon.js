import React from 'react';
import '../../App.css';
import HeroSectionProfile from '../ProfilePrestataire/HeroSectionProfile/HeroSectionProfile';
import BarProfileEvenement from '../ProfileOrganisateur/BarProfileEvenement/BarProfileEvenement';
import EvenementBrouillon from '../ProfileOrganisateur/EvenementBrouillon/EvenementBrouillon';

function EvenementsBrouillon() {
  return (
    <>
      <HeroSectionProfile/>
      <BarProfileEvenement/>
      <EvenementBrouillon/>
    </>
  );
}

export default EvenementsBrouillon;