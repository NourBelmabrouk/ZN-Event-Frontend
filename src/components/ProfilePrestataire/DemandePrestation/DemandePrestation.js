import React from 'react';
import '../../../App.css';
import './DemandePrestation.css';

function DemandePrestations() {
  return (
    <>
        <div className="page">
           <div className="containerPres">
               <div className="listing_prestations" className="stripeKo">
                    <h3 className="titlePres">
                        Commandes des Clients
                    </h3>
                    <hr></hr>
                    <div className="list-prestation">
                     {/* DEBUT BlOC 1*/}
                        <div className="is-not-published first odd">
                            <div className="prestation_details">
                                
                                <img src="/images/concept1.jpg" className='image1' alt=""/>
                                
                                <div className="detail">
                                    <div className="titrePres">
                                        Zeineb Labbane
                                    </div>
                                    <div className="typePres">
                                        04 Juin 2021
                                    </div>
                                    <br/>
                                    <div className="typePres">
                                        50 Personnes
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Refuser la demande
                                        </a>
                                    </li>
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Accepter la demande
                                        </a>
                                    </li>
                                    <li className="round see">
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
                        <hr/>
                        {/* FIN BlOC 1*/}


                        {/* DEBUT BlOC 2*/}
                        <div className="is-not-published first odd">
                            <div className="prestation_details">
                                
                                <img src="/images/concept1.jpg" className='image1' alt=""/>
                                
                                <div className="detail">
                                    <div className="titrePres">
                                        Nour Belmabrouk
                                    </div>
                                    <div className="typePres">
                                        31 Mai 2021
                                    </div>
                                    <br/>
                                    <div className="typePres">
                                        32 Personnes
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Refuser la demande
                                        </a>
                                    </li>
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Accepter la demande
                                        </a>
                                    </li>
                                    <li className="round see">
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
                        <hr/>
                        {/* FIN BlOC 2*/}
                    </div> 
                </div>
            </div>
        </div>
    </>
    
  );
}

export default DemandePrestations;