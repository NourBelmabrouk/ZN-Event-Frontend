import React from 'react';
import '../../../App.css';
import './ValidationPopup.css';
import Commande from "../../../services/commande.service";



function ValidationPopup(props) {

  return (
    <>
        <div className="dialog_bg no-banner">
            <div className="dialog_title">
               <h2>Valider Mon Evenement</h2>
            </div>
            <div className="content-valider2">
                <p>Validating your event will send a reservation request to the providers you have selected. You can contact them for more details on their services.</p>
                <p>You will always be able to add new providers at the end of the validation of your event or to delete them.</p>
                <p className="blue">
                   The validation of your event does not engage you with the providers.
                </p>
                <p>The validation of your event will make it visible on the platform.</p>
                <p className="blue">
                   You will not be able to modify the coordinates and main informations of your event.
                </p>
            </div>
            <div className="bottom_button_container">
                <div className="flag_valider">
                    <span className="flag-wrapper flag-validation-v-nement-par-l-organi flag-validation-v-nement-par-l-organi-276268"> 
                        <a href="/EvenementsBrouillon" onClick={()=> {Commande.confirmCommande(props.commande)}} title="" className="flag flag-action flag-link-normal" rel="nofollow">
                            Valider mon événement
                        </a>
                        <span className="flag-throbber">&nbsp;</span> 
                    </span>
                </div>
            </div>
        </div>
    </>
    
  );
}

export default ValidationPopup;