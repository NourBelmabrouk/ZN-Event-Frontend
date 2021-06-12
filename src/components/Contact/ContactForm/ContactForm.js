import React, { Component } from 'react';
import '../../../../src/css/skin/skin-8.css';
import '../../../../src/css/style - Copy (3).css';
import '../../../../src/css/skin/skin-4.css';

class ContactForm extends Component {


    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <div className="section-full content-inner contact-page-12 overlay-black-dark" >
                    <img src='/images/contact2.PNG' className='img_contact' alt='' />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 text-white">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <i className=" fa fa-map-marker" />
                                                        &nbsp;  &nbsp; Adresse de ZnEvent
                                                    </h5>
                                                    <p>05 Rue Des Omeyades EL Menzah 05, Ariana, Tunisie </p>
                                                    <h6 className="m-b15 text-black font-weight-400"><i className="ti-alarm-clock"></i>Horaires de bureau</h6>
                                                    <p className="m-b0">Lundi à Samedi - 9.00 - 17.00</p>
                                                    <p>Dimanche - Fermé</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <i className=" fa fa-envelope" />
                                                        &nbsp;  &nbsp; E-mail
                                                    </h5>
                                                    <p className="m-b0">znEvent@gmail.com</p>
                                                    <p className="m-b0">zeineb.labbane@gmail.com</p>
                                                    <p className="m-b0">nour.belmabrouk@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <i className=" fa fa-phone-square" />
                                                        &nbsp;  &nbsp;  Phone Numbers
                                                    </h5>
                                                    <p className="m-b0">+216-70-505-700</p>
                                                    <p className="m-b0">+216-70-505-600</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 m-b30 blocForm">
                                    <form className="inquiry-form wow box-shadow bg-white fadeInUp " data-wow-delay="0.2s">
                                        <h3 className="title-box font-weight-300 m-t10 m-b20">Transformons votre idée en réalité <span className="bg-primary"></span></h3>
                                        <p>L'équipe ZnEvent vous propose de prendre en charge gratuitement l'organisation et la coordination de votre événement.</p>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className=" fa fa-user " /></span>
                                                        
                                                        <input name="dzName" type="text" required className="form-control" placeholder=" Prénom"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className=" fa fa-phone " /></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Téléphone"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group"> 
                                                        <span className="input-group-addon"><i className=" fa fa-envelope " /></span>
                                                        <input name="dzEmail" type="email" className="form-control" required  placeholder="Votre Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className=" fa fa-check-square" /></span>
                                                        <select className="input-select form-control">
                                                            <option>Qui êtes-vous</option>
                                                            <option>Prestataire</option>
                                                            <option>Client</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className=" fa fa-download" /></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Télécharger Fichier"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className=" fa fa-handshake" /></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Parlez-nous de votre projet ou idée"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 buttonLocal">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-md"> 
                                                    <span>Envoyer</span> 
                                                </button>
                                            </div>
                                        </div>
                                    </form>	
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
                
                                             
            </>
        )
    }
}
export default ContactForm;