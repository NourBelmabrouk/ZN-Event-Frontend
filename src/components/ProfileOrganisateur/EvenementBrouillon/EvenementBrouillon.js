import React,{useState} from 'react';
import '../../../App.css';
import './EvenementBrouillon.css';
import Popup from '../../Popup/Popup';
import { Link } from 'react-router-dom';
import  ValidationPopup  from './ValidationPopup';


function EvenementBrouillon() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <div className="page">
           <div className="containerPres">
               <div className="listing_prestations" className="stripeKo">
                    <h3 className="titlePres">
                        Votre Brouillon
                    </h3>
                    <hr/>
                    <div className="list-prestation">
                     {/* DEBUT BlOC 1*/}
                        <div className=" blocEvent">
                            <div className="prestation_details">
                                
                                <img src="/images/concept4.jpg" className='image1' alt=""/>
                                
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
                                    <li className="normal valid">
                                    <Link  className='green open-dialog' onClick={ () => setButtonPopup(true)} >
                                         Valider ma prestation
                                    </Link>
                                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} onRequestClose={() => setButtonPopup(false)}>
                                         <ValidationPopup/>
                                    </Popup>
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
                           
                            <div className="evenement_bottom">
                                <div className="row_list">
                                    <div className="row_wrap"> 
                                        <span className="label">Prestataires</span> 
                                        <a className="lien" href="brouillons/gestion-des-prestataires/276268">
                                            Gérer les prestataires
                                        </a>
                                    </div>
                                    <div className="row_wrap"> 
                                        <span className="label">Communication</span> 
                                        <a className="lien" href="brouillons/276268/communication">
                                            Accéder à mes options
                                        </a>
                                    </div>
                                    <div className="row_wrap grey"> 
                                        <span className="label">Billetterie</span> 
                                        <a className="lien" href="/evenements/organisation/tableau-de-bord/evenements/brouillons/prochainement">
                                            J'ai besoin d'une billetterie !
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        
                        {/* FIN BlOC 1*/}


                        {/* DEBUT BlOC 2*/}
                        <div className=" blocEvent">
                            <div className="prestation_details">
                                
                                <img src="/images/concept3.jpg" className='image1' alt=""/>
                                
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
                                    <li className="normal valid">
                                    <Link  className='green open-dialog' onClick={ () => setButtonPopup(true)} >
                                         Valider ma prestation
                                    </Link>
                                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} onRequestClose={() => setButtonPopup(false)}>
                                         <ValidationPopup/>
                                    </Popup>
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
                           
                            <div className="evenement_bottom">
                                <div className="row_list">
                                    <div className="row_wrap"> 
                                        <span className="label">Prestataires</span> 
                                        <a className="lien" href="brouillons/gestion-des-prestataires/276268">
                                            Gérer les prestataires
                                        </a>
                                    </div>
                                    <div className="row_wrap"> 
                                        <span className="label">Communication</span> 
                                        <a className="lien" href="brouillons/276268/communication">
                                            Accéder à mes options
                                        </a>
                                    </div>
                                    <div className="row_wrap grey"> 
                                        <span className="label">Billetterie</span> 
                                        <a className="lien" href="/evenements/organisation/tableau-de-bord/evenements/brouillons/prochainement">
                                            J'ai besoin d'une billetterie !
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        
                        {/* FIN BlOC 2*/}
                    </div> 
                </div>
            </div>
            {/* BOUTTON ADD SERVICE*/}
            <br/>
            <div className="bottom_list_button">
                <a className="blue" href="/evenements/prestation/tableau-de-bord/fiche-prestataire/ajouter-prestation">
                    Ajoutez un événement
                </a>
            </div>
        </div>
    </>
    
  );
}

export default EvenementBrouillon;