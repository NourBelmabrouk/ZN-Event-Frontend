import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import  {TextInput} from "./inputTypesForm";
import  {Form as form , Button} from 'react-bootstrap';

const phoneRegExp = /^[+]*[0-9]{8}$/g ;
const  emailRegExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;




const SignUp = ({onSubmit}) => {
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
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
            onSubmit={
                (values, { setSubmitting}) =>{
                    setTimeout(()=> {
                        alert(JSON.stringify(values,null,2));
                        setSubmitting(false);
                    },400);
                }}
        >
            <Form onSubmit={onSubmit}>
                <form>
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

                <Button variant="primary" type="submit">Submit</Button>
                </form>
            </Form>
        </Formik>

    );
};

export default SignUp;