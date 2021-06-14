import React, {Component, useState} from 'react';
import '../../../App.css';
import './DemandePrestation.css';
import Prestation from "../../../services/prestation.service";
import Commande from "../../../services/commande.service";
import Popup from '../../Popup/Popup';
import SignIn from "../../Home/authentication_forms/SignIn";

export  default class DemandePrestations extends  Component{
    constructor(props) {
        super(props);
        this.state={
            services: [],
            buttonPopup: false
        };
    }


    componentDidMount() {
        Commande.findNonAcceptedCommandes().then(s =>{
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
                                Commandes des Clients
                            </h3>
                            <hr></hr>
                            <div className="list-prestation">
                                {/* DEBUT BlOC 1*/}
                                {this.state.services.length === 0 ?
                                    <div className="titrePres">
                                        Pas de commandes
                                    </div> :
                                    this.state.services.map((service) =>(
                                        <div>
                                <div className="is-not-published first odd">
                                    <div className="prestation_details">

                                        <img src="/images/concept1.jpg" className='image1' alt=""/>

                                        <div className="detail">
                                            <div className="titrePres">
                                                {service.id_commande}
                                            </div>
                                            <div className="typePres">
                                                {service.date}
                                            </div>
                                            <br/>
                                            <div className="typePres">
                                                {service.numberOfGuests} Personnes
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prestation_actions">
                                        <ul className=" ulPres button-list">
                                            <li className="normal valid">
                                                <a className="green open-dialog" href="/DemandePrestations" rel="modal-99" onClick={()=>{Commande.deleteCommande(service.id_commande)}}>
                                                    Refuser la demande
                                                </a>
                                            </li>
                                            <li className="normal valid">
                                                <a className="green open-dialog" href="/DemandePrestations" rel="modal-99" onClick={()=>{Commande.acceptCommande(service.id_commande)}}>
                                                    Accepter la demande
                                                </a>
                                            </li>
                                            <li className="round see">
                                                <i className="fa fa-eye"/>
                                                <a  onClick={ () => {this.setState({buttonPopup: true})}}>
                                                    Voir
                                                </a>
                                            </li>
                                        </ul>
                                        <br/>
                                    </div>
                                </div>
                                <br/>
                                <hr/>
                                            <Popup trigger={this.state.buttonPopup} setTrigger={(value) =>{this.setState({buttonPopup: value})}} onRequestClose={() => {this.setState({buttonPopup: false})}}>
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
                </div>
            </>

        );
    }
}