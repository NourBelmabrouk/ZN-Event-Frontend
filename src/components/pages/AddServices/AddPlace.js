import React from 'react';
import '../../../App.css';
import  AddPlaceForm from "../../AddService/AddPlaceForm";
import CardItem from "../../Home/CardsPrestatires/CardItem";
import '../../Home/CardsPrestatires/Cards.css';


function AddPlace() {
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
            <AddPlaceForm />
        </>
    );
}

export default AddPlace;