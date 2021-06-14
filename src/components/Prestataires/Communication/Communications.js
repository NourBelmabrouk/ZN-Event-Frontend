import React from 'react';
import '../../../App.css';
import './Communications.css'

export default function Communications() {
  return(
    <>
       <div className="pageCommunication">
          <div className="containerPres">
            <div className="listing_prestations">
              <h3 className="titleComm">
                 Sélectionnez les services pour promouvoir votre événement
              </h3>
            </div> 
            <div className="blocRightCommunication">
            <ul id="resultat" className="list-Communication">
                     {/*DEBUT BLOC1 */}
                     <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="">
                                    <img src="/images/communication1.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+500,00€ / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        Accompagnement & diffusion sur vos réseaux sociaux
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                Envoyer des SMS à vos participants jusqu’au jour J afin de maximiser les chances de prise de connaissance de votre événement
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
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
			                    <a href="">
                                    <img src="/images/communication2.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+10,00€ / </strong> <small>badge</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        Badge digitalisés & personnalisés
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                    Créez vos badges personnalisés pour vos invités !
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
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
			                    <a href="">
                                    <img src="/images/communication3.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+750,00€ / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        Campgne Radio
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                    Lancez votre spot radio et donnez de la visibilité à votre événement !
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
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
			                    <a href="">
                                    <img src="/images/communication4.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+500,00€ / </strong> <small>site</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        Création d'un site web dédié
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                Besoin d’un site web pour votre événement ? Les partenaires ZnEvent s’en charge pour vous
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
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
			                    <a href="">
                                    <img src="/images/communication5.png"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+5,00€ / </strong> <small>1000 @</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        E-mailing
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                  Créez facilement un e-mailing pertinent à l'ensemble de votre base de données. Besoin de conseils ? L'équipe ZnEvent est là pour vous accompagner.
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC5 */}  

                    {/*DEBUT BLOC6 */}
                    <li className="minifiche %selected%" id="116354">
	                    <div className="bgLieu">
		                    <div className="left">
			                    <a href="">
                                    <img src="/images/communication6.jpg"/>
                                </a>
			                    <div className="pricebox">
				                    <div className="price"><strong className="price_value">+250,00€ / </strong> <small>événement</small></div>
				                    <a className="text addItem add  open-dialog" href="#">
                                        + d'options de prix
                                    </a>
			                    </div>
                            </div>
		                    <div className="rightComm">
			                    <h3 className='nomComm'>
                                        Enquête de satisfaction post-événement
                                    
                                </h3>
                                
			                    <div className="description description_prestation">
                                Proposez à vos participants de donner leur avis sur l'événément via un formulaire en ligne réalisé par nos soins. Faites appel à un collaborateur ZnEvent pour réaliser l'enquête le jour de l'événement
                                </div>
			                    <div className="bottom1">
                                    <i class="fa fa-arrow-right"/>
				                    <a className="voir_plus" href="">
                                        Voir plus
                                    </a>
			                    </div>
		                    </div>
	                    </div>
                    </li>
                    {/*FIN BLOC6 */}  

                    </ul>
                    </div>
           </div>
        </div>
       
    </>
  );
}
