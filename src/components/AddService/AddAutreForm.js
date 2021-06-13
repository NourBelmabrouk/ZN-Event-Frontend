import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {RadioBox, Select, TextInput} from "../inputTypesForm";
import {Button} from '../Button/Button';

import Prestation from "../../services/prestation.service";
import {MdSignalCellularNull} from "react-icons/all";



export  default class AddPlaceForm extends  Component{
    constructor(props) {
        super(props);
        this.state={
            message: "",
            successful: false
        };
    }

    render() {
        return (
            <Formik
                initialValues={
                    {
                        type: '',
                        nom: '',
                        adresse: '',
                        code_postal: '',
                        ville: '',
                        description: '',
                        intervention: 0,
                        morning: 0,
                        evening: 0,
                        full_day: 0,
                        night: 0
                    }
                }
                validationSchema={ Yup.object({
                    nom: Yup.string()
                        .required('Obligatoire'),
                    adresse: Yup.string()
                        .required('Obligatoire'),
                    code_postal: Yup.number()
                        .required('Obligatoire'),
                    ville: Yup.string()
                        .required('Obligatoire'),
                    intervention: Yup.number()
                        .required('Obligatoire'),
                    morning: Yup.number()
                        .required('Obligatoire'),
                    evening: Yup.string()
                        .required('Obligatoire'),
                    full_day: Yup.string()
                        .required('Obligatoire'),
                    night: Yup.string()
                        .required('Obligatoire'),
                })}
                onSubmit={ (values) =>{
                    Prestation.addService(
                        values.type, values.nom, values.adresse, values.code_postal, values.ville,
                        values.description,values.intervention, null, null, null,
                        values.morning,values.evening,values.full_day,values.night
                    ).then(
                        response => {
                            this.setState({
                                message:  response.data.message,
                                successful: true
                            });
                        },
                        error =>{
                            const resMessage=(error.response && error.response.data && error.response.data.message)
                                || error.message || error.toString();

                            this.setState({
                                message: resMessage,
                                successful: false
                            });
                        }
                    );
                }}

            >
                <Form >
                    {!this.state.successful && (

                        <div className="home_part_concept" >
                            <div className="containerConcept">
                                <div className="row">
                                    <div className="concept_left">
                                        <div className="bg" style={{paddingTop:10, paddingLeft: 10,paddingRight:2,paddingBottom:110}}>

                                            <label style={{paddingRight:15}}>Type de prestation:   </label>
                                            <select
                                                name="type"
                                            >
                                                <option value="" label="-Obligatoire-" />
                                                <option value="un endroit" label="un endroit" />
                                                <option value="Nourriture" label="Nourriture" />
                                                <option value="Agents de sécurité" label="Agents de sécurité" />
                                                <option value="une animation" label="une animation" />
                                                <option value="célébrités" label="célébrités" />
                                                <option value="Animation musicales" label="Animation musicales" />
                                                <option value="Mobilier et décoration" label="Mobilier et décoration" />
                                                <option value="Photographes" label="Photographes" />
                                                <option value="Serveurs" label="Serveurs" />
                                                <option value="Transport" label="Transport" />
                                            </select>

                                            <br/><br/>
                                            <TextInput
                                                label="Nom de la prestation:"
                                                name="nom"
                                                type="text"
                                            />
                                            <br/>
                                            <TextInput
                                                label="Adresse de votre lieu de travail:"
                                                name="adresse"
                                                type="text"
                                            />
                                            <br/>
                                            <TextInput
                                                label="Code postal:"
                                                name="code_postal"
                                                type="number"
                                            />
                                            <br/>

                                            <TextInput
                                                label="Ville:"
                                                name="ville"
                                                type="text"
                                            />

                                            <br/>
                                            <TextInput
                                                label="Rayon d'intervention:"
                                                name="intervention"
                                                type="number "
                                            />

                                        </div>
                                    </div>
                                    <div className="concept_right">
                                        <ul className="concept_list" style={{paddingRight:50}}>
                                            <li style={{paddingLeft:5,paddingTop:10,paddingRight:2}}>
                                                <div>
                                                    <TextInput
                                                        label="Description:"
                                                        name="description"
                                                        type="text "
                                                        as="textarea" rows={7}
                                                    />
                                                </div>
                                            </li>
                                            <li style={{paddingLeft:5,paddingTop:10,paddingRight:2,paddingBottom:20}}>
                                                <TextInput
                                                    label="Prix/demi-journée:"
                                                    name="morning"
                                                    type="number "
                                                />
                                                <br/>
                                                <TextInput
                                                    label="Prix/journée:"
                                                    name="evening"
                                                    type="number "
                                                />
                                                <br/>
                                                <TextInput
                                                    label="Prix/soirée:"
                                                    name="night"
                                                    type="number "
                                                />
                                                <br/>
                                                <TextInput
                                                    label="Prix/journée+soirée:"
                                                    name="full_day"
                                                    type="number "
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="submit" className="bouton 'bouton--primary' bouton--large" style={{marginLeft:10, width:150}}>Submit</button>
                                </div>
                            </div>
                        </div>

                    )}
                    {this.state.message && (
                        <div className="form-group">
                            <div
                                className={
                                    this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {this.state.message}
                            </div>
                        </div>
                    )}
                </Form>
            </Formik>

        );
    }
}