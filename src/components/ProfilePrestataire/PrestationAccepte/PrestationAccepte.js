import React, {Component} from 'react';
import '../../../App.css';
import './PrestationAccepte.css';
import Commande from "../../../services/commande.service";
import Popup from "../../Popup/Popup";

export  default class PrestationAccepte extends  Component{
    constructor(props) {
        super(props);
        this.state={
            services: []
        };
    }
    componentDidMount() {
        Commande.findAcceptedCommandes().then(s =>{
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
                                Commandes Acceptées
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

                                        <img src="/images/concept1.jpg" className='image2' alt=""/>

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
                                            <br/>

                                        </div>
                                    </div>
                                    <div className="prestation_actions">
                                        <ul className=" ulPres button-list">

                                            <li className="round see1">
                                                <i className="fa fa-eye"/>
                                                <a onClick={ () => {this.setState({buttonPopup: true})}}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
