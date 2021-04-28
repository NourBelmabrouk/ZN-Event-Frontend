import React, {Component} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import  {TextInput} from "../inputTypesForm";
import  { Button} from 'react-bootstrap';

import AuthService from "../../services/auth.service";

const  emailRegExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;


export  default class  SignIn extends  Component{
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
                        email: '',
                        password: ''
                    }
                }
                validationSchema={ Yup.object({
                    email: Yup.string()
                        .matches(emailRegExp)
                        .required('Obligatoire'),
                    password: Yup.string()
                        .min(8,'Doit contenir 8 caractères ou plus')
                        .required('Obligatoire'),
                })}
                onSubmit ={ values =>{
                    AuthService.login(
                        values.email,values.password
                    ).then(
                        response => {
                            this.setState({
                                message: "Logged in successfully",
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