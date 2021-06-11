import React from 'react';
import '../../../App.css';
import './BarProfile.css';

function BarProfile() {
  return (
    <>
      <div className="top_page">
        <div className="container">
           <ul className="tabs_nav">
                <li>
                   <a className="fiche active" href="/evenements/prestation/tableau-de-bord/fiche-prestataire">
                      <i></i>
                       <span>Ma fiche prestataire</span>
                    </a>
                </li>
                <li>
                    <a className="demandes" href="/evenements/prestation/tableau-de-bord/demandes-prestation">
                       <i></i>
                       <span>Demandes de prestation</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees" href="/evenements/prestation/tableau-de-bord/prestations-acceptees">
                        <i></i>
                        <span>Prestations acceptees</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
    
  );
}

export default BarProfile;