import React from 'react';
import '../../../App.css';
import './Boisson.css';
import FormFiltrage from '../FormFiltrage/FormFiltrage';

export default function Boisson() {
  return(
    <>
       <div className="pageLieu">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titlePres">
                Choisir mes boissons
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
                                    <img src="/images/Boisson1.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">4.90 dt / </strong> <small>personne</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Pause gourmande
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Menzah 05 ,Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                    Vos plateaux repas chez un traiteur à Menzah 5...
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
                                    <img src="/images/Boisson2.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">4,50 dt / </strong> <small>personne</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-1">
                                        Petit dejeuner
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Lac2, Tunis </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                    Brochette de fruits frais de saison (1/pers) Mini...
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
                                    <img src="/images/Boisson3.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">5,00 dt / </strong> <small>personne</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Dejeuner Artisanal
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Ariana, Tunisie </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                    Magnifique déjeuner artisanale composé par un artisan..
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
                    {/*FIN BLOC3 */}
                    {/*DEBUT BLOC4 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/Boisson4.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">5,50 dt / </strong> <small>personne</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                    Pause Café avec viennoiseri
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Lac, Tunis </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30km autour</p>
                                
			                    <div className="description description_prestation">
                                  Pause café avec viennoiseries (2 piéces par personne)...
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
                    {/*FIN BLOC4 */}
                    {/*DEBUT BLOC5 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/Boisson5.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">9,00 dt / </strong> <small>personne</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Pause gourmande sucrée
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
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
                                        Burgers au choix
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
