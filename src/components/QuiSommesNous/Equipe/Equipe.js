import React, { Component } from 'react';
import './Equipe.css';



class Equipe extends Component {


    render() {
        return (
            <>
                <div className="pageEquipe">
                    <div className="containerEquipe">
                        <h1 className="page_title">
                            Rencontrez l'équipe ZnEvent
                        </h1>
                        <ul className="list-team">
                            <li className="first odd">
                                <div >
                                    <div className="photoEquipe">
                                        <img className='imgPerso' src="/images/NourBelmabrouk.jpg"/>
                                    </div>
                                    <div className="detail">
                                        <div className="prenom">
                                            Nour BELMABROUK
                                        </div>
                                        <div className="fonction">
                                            C.E.O &amp; Co-Fondateur
                                        </div>
                                        <div className="email">
                                             <i className="fa fa-envelope" />&nbsp;nourbelmabrouk@gmail.com
                                        </div>
                                        <div className="ville_container">
                                            <div className="ville">
                                                <i className="fa fa-home" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tunis
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="even">
                                <div >
                                    <div className="photoEquipe">
                                        <img className='imgPerso' src="/images/ZeinebLabbane.jpg"/>
                                    </div>
                                    <div className="detail">
                                        <div className="prenom">
                                            Zeineb LABBANE
                                        </div>
                                        <div className="fonction">
                                            C.T.O &amp; Associé
                                        </div>
                                    <div className="email">
                                         <i className="fa fa-envelope" />&nbsp; zeineb.labbane@gmail.com
                                    </div>
                                    <div className="ville_container">
                                        <div className="ville">
                                            <i className="fa fa-home" />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tunis
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            </>
        )
    }
}

export default Equipe;