import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {RadioBox, Select, TextInput} from "../inputTypesForm";
import  { Button} from 'react-bootstrap';

import AuthService from "../../services/auth.service";

const phoneRegExp = /^[+]*[0-9]{8}$/g ;
const  emailRegExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;


export  default class  SignUp extends  Component{
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
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        roles: '',
                    }
                }
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                        .max(15,'Doit contenir 15 caractères ou moins')
                        .required('Obligatoire'),
                    lastName: Yup.string()
                        .max(20,'Doit contenir 20 caractères ou moins')
                        .required('Obligatoire'),
                    phoneNumber: Yup.string()
                        .matches(phoneRegExp)
                        .required('Obligatoire'),
                    email: Yup.string()
                        .matches(emailRegExp)
                        .required('Obligatoire'),
                    roles: Yup.array()
                        .length>2,
                    password: Yup.string()
                        .min(8,'Doit contenir 8 caractères ou plus')
                        .required('Obligatoire'),
                    confirmPassword: Yup.string().when('password',{
                        is: val=>(val && val.length > 0),
                        then : Yup.string().oneOf(
                            [Yup.ref('password')],
                            'Les deux mots de passe doivent être identiques'
                        )
                    })
                })}
                onSubmit ={ values =>{
                    const role=["user"];
                    role.push(values.roles);
                    AuthService.register(
                        values.firstName, values.lastName,values.phoneNumber,values.email,values.password,role
                    ).then(
                        response => {
                            this.setState({
                                message: response.data.message,
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
                <div>
                    <TextInput
                        label="Prénom"
                        name="firstName"
                        type="text"
                        placeholder="Entrer votre prénom..."
                    />

                    <TextInput
                        label="Nom"
                        name="lastName"
                        type="text"
                        placeholder="Entrer votre nom..."
                    />

                    <TextInput
                        label="Numéro de téléphone"
                        name="phoneNumber"
                        type="text"
                        placeholder="Entrer votre numéro..."
                    />

                    <TextInput
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Entrer votre email..."
                    />


                    <TextInput
                        label="Mot de passe"
                        name="password"
                        type="password"
                        placeholder="Entrer votre mot de passe..."
                    />


                    <TextInput
                        label="Confirmer votre mot de passe"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirmer votre mot de passe..."

                    />

                    <div>
                        Vous inscrivez à notre site pour quelle raison?
                    </div>
                    <RadioBox label="Register Type" name="roles" value="client" >
                        utiliser notre site pour organiser un événement
                    </RadioBox>

                    <RadioBox label="Register Type" name="roles" value="prestataire">
                        Offrir des services
                    </RadioBox>

                    <Button  type="submit">Submit</Button>
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
