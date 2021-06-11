import React from 'react';
import '../../../App.css';
import './BarProfile.css';

function BarProfile2() {
  return (
    <>
      <div className="top_page">
        <div className="container">
           <ul className="tabs_nav">
                <li>
                   <a className="fiche " href="/FichePrestations">
                      <i></i>
                       <span>Ma fiche prestataire</span>
                    </a>
                </li>
                <li>
                    <a className="demandes active" href="/DemandePrestations">
                       <i></i>
                       <span>Demandes de prestation</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees" href="/PrestationsAccepte">
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

export default BarProfile2;