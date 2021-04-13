import React from 'react';
import { useField } from 'formik';
import  Form from 'react-bootstrap/Form';
import classes from './inputTypesForm.module.css';
import  'bootstrap/dist/css/bootstrap.min.css'

export const TextInput=({label, ...props})=>{
    const [field , meta]=useField(props);
    return(
        <div>
        <Form.Group controlId="formGroupEmail">
            <Form.Label htmlFor={props.id|| props.name}> {label}</Form.Label>
            <Form.Control   {...field} {... props} />
            {meta.touched && meta.error ? (
                <div>
                <Form.Text className="error"> {meta.error} </Form.Text>
                </div>
            ) : null}
        </Form.Group>
        </div>
    );
}

export  const  Checkbox=({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export  const  Select=({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};