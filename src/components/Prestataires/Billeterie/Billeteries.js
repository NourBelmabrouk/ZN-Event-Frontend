import React from 'react';
import '../../../App.css';
import './Billeterie.css'

export default function Billetteries() {
  return(
    <>
       <div className="pageBilleterie">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titlePres">
                 Créez votre page d'inscription/billetterie pour vos participants
              </h3>
            </div> 

            <form className="formulaire_billeterie">
              <div className="form_section">
                <h2>Paramètres généraux de votre page d'inscription/billetterie</h2>
                <div className="form_section_fields">
                    <div className="field_row">
                      <div className="field field_bolean">
                        <input type="checkbox" className="settings-visible" name="settings-visible" checked="" value="1"/>
                        <label for="settings-visible">
                           Inscription publique ?
                            <span className="bolean_icon">
                              <span className="yes">Oui</span>
                              <span className="no">Non</span>
                            </span>
                         </label>
                      </div>
                    </div>
                    <div className="field_row">
                      <div className="field field_bolean">
                        <input type="checkbox" className="settings-is-limited" name="settings-is-limited" checked="" value="1"/>
                        <label for="settings-is-limited">
                          Quantité minimum de places par commande
                          <span className="bolean_icon">
                            <span className="yes">Oui</span>
                            <span className="no">Non</span>
                          </span>
                        </label>
                      </div>
                    <div className="field field_num">
                      <label for="settings-max" className="small_label">
                         Quantité maximum
                      </label>
                      <input type="number" value="80" className="settings-max" name="settings-max"/>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="billeterie_bottom">
                      <div className="action_validate">
                          Valider ma page inscirption/billetterie 
                      </div>
                  </div>
                  </form>   
                  
           </div>
        </div>
       
    </>
  );
}
