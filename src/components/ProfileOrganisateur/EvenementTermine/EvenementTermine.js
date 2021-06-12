import React from 'react';
import '../../../App.css';
import './EvenementTermine.css';

function EvenementTermine() {
    
  return (
    <>
        <div className="page">
           <div className="containerPres">
               <div className="listing_prestations" className="stripeKo">
                    <h3 className="titlePres">
                        C'est Terminé !
                    </h3>
                    <hr/>
                    <div className="list-prestation">
                     {/* DEBUT BlOC 1*/}
                        <div className=" blocEvent">
                            <div className="prestation_details">
                                
                                <img src="/images/concept4.jpg" className='image3' alt=""/>
                                
                                <div className="detail">
                                    <div className="titrePres">
                                        Anniversaire Zeineb
                                    </div>
                                    <div className="typePres">
                                        15/06/2021 - 17:00
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="round see1">
                                        <i className="fa fa-eye" />
                                        <a href="https://www.oandb.fr/italien-planb-ariana">
                                         Voir 
                                        </a>
                                    </li>
                                </ul>
                                <br/>
                            </div>
                        </div>
                        <br/>
                        
                        {/* FIN BlOC 1*/}


                        {/* DEBUT BlOC 2*/}
                        <div className=" blocEvent">
                            <div className="prestation_details">
                                
                                <img src="/images/concept3.jpg" className='image3' alt=""/>
                                
                                <div className="detail">
                                    <div className="titrePres">
                                        Mariage F&H
                                    </div>
                                    <div className="typePres">
                                        15/06/2021 - 17:00
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="round see1">
                                        <i className="fa fa-eye" />
                                        <a href="https://www.oandb.fr/italien-planb-ariana">
                                         Voir 
                                        </a>
                                    </li>
                                </ul>
                                <br/>
                            </div>
                        </div>
                        <br/>
                        
                        {/* FIN BlOC 2*/}
                    </div> 
                </div>
            </div>
            <br/>

        </div>
    </>
    
  );
}

export default EvenementTermine;