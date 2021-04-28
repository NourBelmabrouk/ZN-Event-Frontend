import React from 'react';
import './Popup.css';

function Popup (props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <i class="fa fa-window-close"  aria-hidden="true" onClick={ () => props.setTrigger(false)}></i>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;
