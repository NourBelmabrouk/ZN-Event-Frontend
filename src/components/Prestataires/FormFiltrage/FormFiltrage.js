import React from 'react';
import '../../../App.css';
import './FormFiltrage.css';


export default function FormFiltrage() {
  return(
    <>
         <div id="home_part_search">
            <div className="containerPrest">
               <div className="search_blockPrestataires">
                   <div className="search_block_containerPrest">
                      <div className="white-bgPrestataires">
                           <form>
                              <div className="form-itemPrestataires">
                                  <label>Où ?</label>
                                  <input id="where" className="form-textPrestataires pac-target-input" type="text" name="organisation-ou" placeholder="Ville" autoComplete="off"/>

                                </div>

                                <div className="form-itemPrestataires form-type-datePrestataires">
                                   <label className="label-datePrestataires"> Quand ?</label>
                                   <input type="date" className="form-textPrestataires input-datePrestataires " name="date" placeholder="Date" id="organiserDate"/>
                                   <div className="datepicker-embedPrestataires"></div>
                                </div>

                                <div className="form-itemPrestataires">
                                     <label>Combien d'invités ?</label>
                                     <input type="number" name="invités"  className="form-textPrestataires form-text-numPrestataires" placeholder="Nbre"/>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
       
    </>
  );
}
