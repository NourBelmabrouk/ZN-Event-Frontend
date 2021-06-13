import React from 'react';
import '../../../App.css';
import './Prestataire.css';
import FormFiltrage from '../FormFiltrage/FormFiltrage';

export default function Prestataire() {
  return(
    <>
       <div className="pageLieu">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titlePres">
                  Choisissez un ou plusieurs prestataires
              </h3>

            </div> 
            <div className="pagMain">
            <div className='blocLeft'>
                  {/**FORM ICI */}
                  <FormFiltrage/>
            </div>

            <div className='blocRight'>
                <ul id="resultat" className="list-lieux">
                     {/*DEBUT BLOC1 */}
                     <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/prestataire1.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">450.90 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Agent de Securité
                                    </a>
                                </h3>
			                    <h4> Prevention, gardiennage, seécurité,...</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Menzah 05 ,Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                    Forts de notre experience, garantissons un haut niveau...
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
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-1">
                                    <img src="/images/prestataire2.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">400,00 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-1">
                                        Animations Digitales
                                    </a>
                                </h3>
			                    <h4> Las Balas - Musica de raiz</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Lac2, Tunis </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                    La Balas Perdida est une bande independente de...
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-1">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC2 */}
                    {/*DEBUT BLOC3 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/prestataire3.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">500,00 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Animations Digitales
                                    </a>
                                </h3>
			                    <h4> DJ Bass Music</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Ariana, Tunisie </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                Electrodidact est un collectif d’artistes Montpelliérain...                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC3 */}
                    {/*DEBUT BLOC4 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/prestataire4.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">550,50 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                    Animations Digitales
                                    </a>
                                </h3>
			                    <h4> Esly</h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Lac, Tunis </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                La chanteuse ESLY interprète en semi-live (instrumentaux...                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC4 */}
                    {/*DEBUT BLOC5 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/prestataire5.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">800,00 dt / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Sonorisation / Lumiere
                                    </a>
                                </h3>
			                    <h4> Bafso </h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Soukra (5026) </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                     Idéal pour une petite pause gourmande, reprendre des...
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC5 */}
                    {/*DEBUT BLOC7 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                    <img src="/images/Boisson7.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">10,00 dt / </strong> <small>évènement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Mojito Bar
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;El Menzah 05, Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Food truck à votre diposition pour tous vos èvènements...
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC7 */}


                  

                   
                 </ul>
            </div>
           </div>
           </div>
        </div>
       
    </>
  );
}
