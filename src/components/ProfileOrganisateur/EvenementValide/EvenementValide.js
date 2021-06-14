import React, {Component} from 'react';
import '../../../App.css';
import './EvenementValide.css';
import Commande from "../../../services/commande.service";
import Popup from "../../Popup/Popup";

export  default class  EvenementValide extends  Component{
    constructor(props) {
        super(props);
        this.state={
            services: [],
            buttonPopup2: false
        };
    }
    componentDidMount() {
        Commande.findConfirmedCommande(JSON.parse(localStorage.getItem("user")).id).then(s =>{
            this.setState({services: s})
        })
    }
    render() {
        return (
            <>
                <div className="page">
                    <div className="containerPres">
                        <div className="listing_prestations" className="stripeKo">
                            <h3 className="titlePres">
                                Vos Evenements Validés
                            </h3>
                            <hr/>
                            <div className="list-prestation">
                                {/* DEBUT BlOC 1*/}
                                {this.state.services.length === 0 ?
                                    <div className="titrePres">
                                        Pas de Commandes validées.
                                    </div> :
                                    this.state.services.map((service) =>(
                                        <div>
                                <div className=" blocEvent">
                                    <div className="prestation_details">

                                        <img src="/images/concept4.jpg" className='image1' alt=""/>

                                        <div className="detail">
                                            <div className="titrePres">
                                                {service.id_commande}
                                            </div>
                                            <div className="typePres">
                                                {service.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prestation_actions">
                                        <ul className=" ulPres button-list">
                                            <li className="round see">
                                                <i className="fa fa-eye"/>
                                                <a onClick={() =>  {this.setState({buttonPopup2: true})}}>
                                                    Voir
                                                </a>
                                            </li>
                                            <li className="round delete">
                                                <i className="fa fa-trash"/>
                                                <a className="red open-dialog" href="/EvenementsValide" onClick={()=>{Commande.deleteCommande(service.id_commande)}} rel="modal-30-276232">
                                                    Delete
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
                                                <a className="lien"
                                                   href="/evenements/organisation/tableau-de-bord/evenements/brouillons/prochainement">
                                                    J'ai besoin d'une billetterie !
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                            <Popup trigger={this.state.buttonPopup2} setTrigger={(value) =>{this.setState({buttonPopup2: value})}} onRequestClose={() => {this.setState({buttonPopup2: false})}}>
                                                <div className="typePres">
                                                    Nombre d'invités: {service.numberOfGuests} Personnes.
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Prix: {service.price}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Date: {service.date}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Description supplementaire: {service.description}
                                                </div>
                                            </Popup>
                                        </div>
                                    ))}

                                {/* FIN BlOC 1*/}

                            </div>
                        </div>
                    </div>
                    {/* BOUTTON ADD SERVICE*/}
                    <br/>
                    <div className="bottom_list_button">
                        <a className="blue"
                           href="/evenements/prestation/tableau-de-bord/fiche-prestataire/ajouter-prestation">
                            Ajoutez un événement
                        </a>
                    </div>
                </div>
            </>

        );
    }
}
