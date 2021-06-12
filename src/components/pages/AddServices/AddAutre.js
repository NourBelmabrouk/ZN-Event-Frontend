import React from 'react';
import '../../../App.css';
import  AddAutreForm from "../../AddService/AddAutreForm";
import CardItem from "../../CardsPrestatires/CardItem";


function AddAutre() {
    return (
        <>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='/images/lieux.jpg'
                                text='LIEUX'
                                path='/AddPlace'
                            />
                            <CardItem
                                src='/images/traiteur_carré.png'
                                text='NOURRITURE'
                                path='/AddFood'
                            />
                            <CardItem
                                src='/images/animation.jpg'
                                text='AUTRE SERVICES'
                                path='/AddAutre'

                            />
                        </ul>
                    </div>
                </div>
            </div>
            <AddAutreForm />
        </>
    );
}

export default AddAutre;