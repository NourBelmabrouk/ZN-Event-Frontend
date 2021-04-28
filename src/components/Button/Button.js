import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['bouton--primary', 'bouton--outline'];
const SIZES = ['bouton--medium', 'bouton--large'];


export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];

    return(
        <Link to={link} className='bouton-mobile'>
            <button className={`bouton ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )

};