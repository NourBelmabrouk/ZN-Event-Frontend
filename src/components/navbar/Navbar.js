import React from 'react';
import Popup from "reactjs-popup";
import  SignUp from '../authentication_forms/SignUp';
import  SignIn from '../authentication_forms/SignIn';
import 'reactjs-popup/dist/index.css';

const navbar=()=>{


    return(
        <div>
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

    <Popup trigger={<button> Sign In</button>} position="center center" modal nested>
        {
            close =>(
                <div >
                    <button onClick={close}>
                        &times;
                    </button>
                    <div >
                        <SignIn />
                    </div>
                </div>
            )
        }
    </Popup>
        </div>
    );
};

export default navbar;