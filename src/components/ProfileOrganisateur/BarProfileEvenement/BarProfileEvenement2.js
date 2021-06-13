import React from 'react';
import '../../../App.css';
import './BarProfileEvenement.css';

function BarProfileEvenement2() {
  return (
    <>
      <div className="top_page">
        <div className="container">
           <ul className="tabs_nav">
                <li>
                   <a className="fiche " href="/EvenementsBrouillon">
                      <i></i>
                       <span>Evénements Brouillons</span>
                    </a>
                </li>
                <li>
                    <a className="demandes active" href="/EvenementsValide">
                       <i></i>
                       <span>Evénements Validés</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees" href="/EvenementsTermine">
                        <i></i>
                        <span>Evénements Terminés</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
    
  );
}

export default BarProfileEvenement2;