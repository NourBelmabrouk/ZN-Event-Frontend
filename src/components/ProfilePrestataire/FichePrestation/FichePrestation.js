import React from 'react';
import '../../../App.css';
import './FichePrestation.css';

function FichePrestation() {
  return (
    <>
        <div className="page">
           <div className="containerPres">
               <div className="listing_prestations" className="stripeKo">
                    <h3 className="titlePres">
                        Prestations publiées
                    </h3>
                    <hr></hr>
                    <div className="list-prestation">
                     {/* DEBUT BlOC 1*/}
                        <div className="is-not-published first odd">
                            <div className="prestation_details">
                                
                                <img src="/images/concept1.jpg" className='image1' alt=""/>
                                
                                <div className="detail">
                                    <div className="titrePres">
                                        PlanB
                                    </div>
                                    <div className="typePres">
                                        Italien
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Valider ma prestation
                                        </a>
                                    </li>
                                    <li className="round see">
                                        <i className="fa fa-eye" />
                                        <a href="https://www.oandb.fr/italien-planb-ariana">
                                         Voir 
                                        </a>
                                    </li>
                                    <li className="round delete">
                                        <i className="fa fa-trash" />
                                        <a className="red open-dialog" href="#" rel="modal-30-276232">
                                            Delete
                                        </a>
                                    </li>
                                    <li className="round edit">
                                        <i className="fa fa-file" />
                                        <a href="https://www.oandb.fr/node/276232/edit?destination=evenements/prestation/tableau-de-bord/fiche-prestataire">
                                             Modifier
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
                                        PlanB
                                    </div>
                                    <div className="typePres">
                                        Italien
                                    </div>
                                </div>
                            </div>
                            <div className="prestation_actions">
                                <ul className=" ulPres button-list">
                                    <li className="normal valid">
                                        <a className="green open-dialog" href="#" rel="modal-99">
                                            Valider ma prestation
                                        </a>
                                    </li>
                                    <li className="round see">
                                        <i className="fa fa-eye" />
                                        <a href="https://www.oandb.fr/italien-planb-ariana">
                                         Voir 
                                        </a>
                                    </li>
                                    <li className="round delete">
                                        <i className="fa fa-trash" />
                                        <a className="red open-dialog" href="#" rel="modal-30-276232">
                                            Delete
                                        </a>
                                    </li>
                                    <li className="round edit">
                                        <i className="fa fa-file" />
                                        <a href="https://www.oandb.fr/node/276232/edit?destination=evenements/prestation/tableau-de-bord/fiche-prestataire">
                                             Modifier
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
            {/* BOUTTON ADD SERVICE*/}
            <br/>
            <div className="bottom_list_button">
                <a className="blue" href="/AddPlace">
                    Ajoutez une prestation
                </a>
            </div>
        </div>
    </>
    
  );
}

export default FichePrestation;