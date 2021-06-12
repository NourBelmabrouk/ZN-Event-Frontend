import React from 'react';
import { useField } from 'formik';
import  Form from 'react-bootstrap/Form';
import  'bootstrap/dist/css/bootstrap.min.css';

export const TextInput=({label, ...props})=>{
    const [field , meta]=useField(props);
    return(

        <Form.Group >
            <Form.Label htmlFor={props.id|| props.name}> {label}</Form.Label>
            <Form.Control   {...field} {... props} />
            {meta.touched && meta.error ? (
                <div>
                <Form.Text className="error"> {meta.error} </Form.Text>
                </div>
            ) : null}
        </Form.Group>

    );
}



export  const  Checkbox=({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="check" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export  const  RadioBox=({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'radio' });
    return (
        <div>
            <label className="radio-input">
                <input type="radio" {...field} {...props} />
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