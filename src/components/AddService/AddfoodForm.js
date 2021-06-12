import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {RadioBox, Select, TextInput} from "../inputTypesForm";

import Prestation from "../../services/prestation.service";



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
                        nom: '',
                        adresse: '',
                        code_postal: '',
                        ville: '',
                        description: '',
                        foodType:'',
                        capacity:0,
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
                    capacity: Yup.number()
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
                        "Nourriture", values.nom, values.adresse, values.code_postal, values.ville,
                        values.description,values.intervention, null, values.capacity, values.foodType,
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
                                        <div className="bg" style={{paddingTop:10, paddingLeft: 10,paddingRight:2}}>

                                            <label style={{paddingRight:15}}>Type du menu: </label>
                                            <select
                                                name="foodType"
                                            >
                                                <option value="" label="-Obligatoire-" />
                                                <option value="Petits déjeuners" label="Petits déjeuners" />
                                                <option value="Buffets" label="Buffets" />
                                                <option value="Desserts" label="Desserts" />
                                                <option value="Boissons" label="Boissons" />
                                                <option value="Africain" label="Africain" />
                                                <option value="Mexicain" label="Mexicain" />
                                                <option value="Libanais" label="Libanais" />
                                                <option value="Chinois" label="Chinois" />
                                                <option value="Italien" label="Italien" />
                                                <option value="Français" label="Français" />
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
                                                label="Nombre max des invités:"
                                                name="capacity"
                                                type="number "
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
                                            <li style={{paddingLeft:5,paddingTop:10,paddingRight:2,paddingBottom:70}}>
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