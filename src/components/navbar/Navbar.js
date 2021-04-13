import React from 'react';
import Popup from "reactjs-popup";
import  SignUp from  '../SignUp';
import 'reactjs-popup/dist/index.css';

const navbar=()=>{


    return(
        <Popup trigger={<button> Sign Up</button>} position="center center" modal nested>
            {
                close =>(
                    <div >
                    <button onClick={close}>
                        &times;
                    </button>
                    <div >
                        <SignUp />
                    </div>
                    </div>
                )
            }
        </Popup>
    );
};

export default navbar;