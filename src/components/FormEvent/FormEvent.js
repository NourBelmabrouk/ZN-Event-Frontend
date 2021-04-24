import React from 'react'
import {Link} from "react-router-dom";
import './FormEvent.css';


function FormEvent() {
    return (
        <>
          <div id="home_part_search">
            <div className="container">
               <div className="search_block">
                   <div className="search_block_container">
                      <div className="white-bg">
                           <h2>Organiser mon événement</h2>
                           <form>
                              <div className="form-item">
                                  <label>Où ?</label>
                                  <input id="where" className="form-text pac-target-input" type="text" name="organisation-ou" placeholder="Choisissez une ville" autocomplete="off"/>

                                </div>

                                <div className="form-item form-type-date">
                                   <label className="label-date"> Quand ?</label>
                                   <input type="date" className="input-date form-text" name="date" placeholder="Choisir une date" id="organiserDate"/>
                                   <div className="datepicker-embed"></div>
                                </div>

                                <div className="form-item">
                                     <label>Combien d'invités ?</label>
                                     <input type="number" name="invités"  className="form-text form-text-num"/>
                                </div>
                                
                            </form>
                        </div>
                        <Link to='/evenements/organisation' className='button_start'>
                             Commencer &nbsp;&nbsp;
                             <i class = 'fas fa-arrow-alt-circle-right' />
                        </Link>
                    </div>
                    
                    <Link to='/formDemande' className='link open-dialog '>
                        Ou confiez-nous votre événement !
                    </Link>
                    
                </div>
            </div>
        </div>
        <div className='card'></div>   
        </>
    )
}

export default FormEvent
