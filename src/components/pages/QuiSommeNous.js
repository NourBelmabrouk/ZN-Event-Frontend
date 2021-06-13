import React from 'react';
import '../../App.css';
import Equipe from '../QuiSommesNous/Equipe/Equipe';
import HeroSectionAbout from '../QuiSommesNous/HeroSectionAbout/HeroSectionAbout';
import HeroSectionCommentCaMarche from '../QuiSommesNous/HeroSectionCommentCaMarche/HeroSectionCommentCaMarche';
import CommentCaMarche from '../QuiSommesNous/CommentCaMarche/CommentCaMarche';

export default function QuiSommeNous() {
  return (
    <>
      <HeroSectionAbout/>
      <Equipe/>
      <HeroSectionCommentCaMarche/>
      <CommentCaMarche/>

    </>
  );
}