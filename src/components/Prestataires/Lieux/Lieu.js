import React from 'react';
import '../../../App.css';
import './Lieu.css';

export default function Lieu() {
  return(
    <>
       <div className="pageLieu">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titlePres">
                  Prestations publiées
              </h3>

            </div> 
            <div className="pagMain">
            <div className='blocLeft'>
                  {/**FORM ICI */}
            </div>

            <div className='blocRight'>
                <ul id="resultat" className="list-lieux">
                     {/*DEBUT BLOC1 */}
                     <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                    <img src="/images/lieu1.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">100,00€ / </strong> <small>demi-journée</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-grand">
                                        Grand Hôtel de l'Opéra
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Toulouse (31000) </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Lieu incontournable pour l'organisation de vos...
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
                                    <img src="/images/lieu2.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">250,00€ / </strong> <small>demi-journée</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/dejeuner-daffaires-cocktail-hotels-diner-dejeuner-salle-de-formation-salle-de-reunion-salle-de-1">
                                        Novotel Toulouse Centre Compa...
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Toulouse (31000) </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Situé dans le centre-ville de Toulouse, le Novotel...
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
                                    <img src="/images/lieu3.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">80,00€ / </strong> <small>demi-journée</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Crown Plaza Meeting
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Ariana, Tunisie </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Magnifique lieu en plein centre-ville de la ville rose...
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
                                    <img src="/images/lieu4.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">350,00€ / </strong> <small>demi-journée</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                    Mövenpick Hotel 
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp; Lac, Tunis </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Lieu incontournable pour l'organisation de vos...
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
                                    <img src="/images/lieu5.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">150,00€ / </strong> <small>demi-journée</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Golf Soukra
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Soukra (5026) </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Professionnels: vous souhaitez motiver vos équipes,...
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
                                    <img src="/images/lieux.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">500,00€ / </strong> <small>évènement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        UnderGround WeddingPlan
                                    </a>
                                </h3>
			                    <h4> <i class="fa fa-thumbs-up "/></h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;El Menzah 05, Ariana </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                     UnderGround vous propose de passer un marriage...
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


                    {/*DEBUT BLOC8 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                    <img src="/images/concept2.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">0,00€ / </strong> <small>évènement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="right">
			                    <h3 className='nomPrestataire'>
                                    <a href="https://www.oandb.fr/animation-teambuilding-2-h-de-golf-chez-golf-en-ville-saint-cloud">
                                        Conference Time
                                    </a>
                                </h3>
			                    <h4><i class="fa fa-thumbs-up "/> </h4>
			                    
			                
                                    <p className="ville"> <i class="fa fa-map-pin"/> &nbsp; &nbsp;Hammamet, Tunisie </p> 
                                    <p className="rayon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50km autour</p>
                                
			                    <div className="description description_prestation">
                                    Conference Time vous propose de faire vos conférences...
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
                    {/*FIN BLOC8 */}

                   
                 </ul>
            </div>
           </div>
           </div>
        </div>
       
    </>
  );
}
