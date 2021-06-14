import React, {Component} from 'react';
import '../../../App.css';
import './FichePrestation.css';
import Prestation from "../../../services/prestation.service";
import Popup from "../../Popup/Popup";

export  default class FichePrestation extends Component{
    constructor(props) {
        super(props);
        this.state={
            services: []
        };
    }

    componentDidMount() {
        Prestation.getServicesOfUser(JSON.parse(localStorage.getItem("user")).id).then(s =>{
            this.setState({services: s});
        })
    }

    render() {
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

                                {this.state.services.length === 0 ?
                                    <div className="titrePres">
                                        Pas de services
                                    </div> :
                                    this.state.services.map((service) =>(
                                        <div>
                                    <div className="is-not-published first odd">
                                        <div className="prestation_details">

                                            <img src="/images/concept1.jpg" className='image1' alt=""/>

                                            <div className="detail">
                                                <div className="titrePres">
                                                    {service.nom}
                                                </div>
                                                <div className="typePres">
                                                    {service.type}
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
                                                    <i className="fa fa-eye"/>
                                                    <a  onClick={ () => {this.setState({buttonPopup: true})}}>
                                                        Voir
                                                    </a>
                                                </li>
                                                <li className="round delete">
                                                    <i className="fa fa-trash"/>
                                                    <a className="red open-dialog" href="/FichePrestations" rel="modal-30-276232"
                                                    onClick={()=> {
                                                        Prestation.deleteServiceById(service.id_service).then(s =>{})
                                                    }}>
                                                        Delete
                                                    </a>
                                                </li>
                                                <li className="round edit">
                                                    <i className="fa fa-file"/>
                                                    <a>
                                                        Modifier
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
                                                    Type: {service.type}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Adresse: {service.adresse}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    code postal: {service.code_postal}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Ville: {service.ville}
                                                </div>
                                                <br/>
                                                <div className="typePres">
                                                    Description : {service.Description}
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
                        <a className="blue" href="/AddPlace">
                            Ajoutez une prestation
                        </a>
                    </div>
                </div>
            </>

        );
    }
}
