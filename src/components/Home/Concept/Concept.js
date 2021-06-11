import React from 'react';
import './Concept.css';

function Concept() {
  return (
    <div className="home_part_concept">
       <h1 className='titre_h2'> Le concept de ZN EVENT </h1>
       <div className="containerConcept">
           <div className="row">
              <div className="concept_left">
                <div className="bg">
                  <img src="/images/concept3.jpg" alt="" className='concept_img'  />
                  <h3 className='titre_h3'>ZN EVENT</h3>
                  <p>ZN EVENT est votre outil digital pour organiser des événements professionnels de qualité sans intermédiaires et en toute simplicité</p>
                  <p>Un seul support intégré pour gérer l'ensemble des composantes de votre événement : Gagnez du temps, négociez vos tarifs, comparez les prix en toute transparence et bénéficiez de notre séléction de qualité des meilleurs prestataires.</p>
                </div>
              </div>
              <div className="concept_right">
                <ul className="concept_list">
                    <li>
                       <img src="/images/1.PNG" alt="" className="icon "/>
                       <div className="item">
                        <h4>PAIEMENTS SECURISES</h4>
                        <p>Réglez vos prestations de manière 100 % sécurisée. Gérez facilement votre facturation depuis votre tableau de bord</p>
                       </div>
                    </li>
                    <li>
                       <img src="/images/2.PNG" alt="" className="icon "/>
                       <div className="item">
                        <h4>Gagnez des participants</h4>
                        <p>Utilisez les outils de communication à votre disposition pour optimiser le taux de remplissage de votre événement et dialoguez avec vos participants</p>
                       </div>
                    </li>
                    <li>
                      <img src="/images/3.PNG" alt="" className="icon "/>
                      <div className="item">
                        <h4>RECHERCHEZ VOS PRESTATAIRES</h4>
                        <p>Votre lieu de réception, votre menu traiteur, vos boissons, vos animations... Trouvez en un clic des prestataires qualifiés par nos soins à l'image de votre événement</p>
                      </div>
                    </li>
                    <li>
                      <img src="/images/4.PNG" alt="" className="icon "/>
                      <div className="item">
                        <h4>TRANSPARENCE DES PRIX</h4>
                        <p>Les tarifs de vos prestataires sont indiqués directement en ligne. Bénéficiez des meilleurs prix et négociez en ligne !</p>
                      </div>
                    </li>
                    <li>
                      <img src="/images/5.PNG" alt="" className="icon "/>
                      <div className="item">
                        <h4>Gagnez du temps</h4>
                        <p>Organisez votre événement de A à Z en moins de 10 minutes</p>
                      </div>
                    </li>
                </ul>
             </div>
           </div>
        </div>
    </div>

  );
}

export default Concept;