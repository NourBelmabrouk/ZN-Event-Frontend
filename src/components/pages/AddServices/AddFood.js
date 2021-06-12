import React from 'react';
import '../../../App.css';
import  AddfoodForm from "../../AddService/AddfoodForm";
import CardItem from "../../Home/CardsPrestatires/CardItem";


function AddFood() {
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
            <AddfoodForm />
        </>
    );
}

export default AddFood;