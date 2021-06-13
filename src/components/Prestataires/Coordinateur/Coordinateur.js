import React from 'react';
import '../../../App.css';
import './Coordinateur.css';

export default function Coordinateur() {
  return(
    <>
       <div className="pageCoordinateur">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titlePres">
                 Choisissez un coordinateur
              </h3>

            </div> 
            <div className="pagMain">
            <div className='blocLeftCoordinateur'>
                  {/**FORM ICI */}
            </div>

            <div className='blocRight'>
                <ul id="resultat" className="list-lieux">

                     {/*DEBUT BLOC1 */}
                     <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/ZeinebLabbane.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">400.00 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Zeineb de ZnEvent 
                                    </a>
                                </h3>
			                    <h4> Coordinatrice événementiel</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; EL Menzah 05 ,Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  3000km autour</p>
                                
			                    <div className="description description_prestation">
                                Un coordinateur est un prestataire de service chargé de...
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC1 */}
                   {/*DEBUT BLOC2 */}
                   <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/NourBelmabrouk.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">400.00 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Nour de ZnEvent 
                                    </a>
                                </h3>
			                    <h4> Coordinateur événementiel</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Ennasser 02 ,Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  3000km autour</p>
                                
			                    <div className="description description_prestation">
                                Un coordinateur est un prestataire de service chargé de...
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC2 */}
        
                 </ul>
            </div>
           </div>
           </div>
        </div>
       
    </>
  );
}
