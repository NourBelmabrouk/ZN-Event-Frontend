import React from 'react';
import '../../../App.css';
import './BarPrestataires.css';

function BarPrestataires6() {
  return (
    <>
      <div className="top_pagePrestataires">
        <div className="containerPrestataires">
           <ul className="tabs_navPrestataires">
                <li>
                   <a className="fiche " href="/Lieux">
                       <i></i>
                       <span>Lieux</span>
                    </a>
                </li>
                <li>
                    <a className="demandes " href="/Traiteurs">
                       <i></i>
                       <span>Menus</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees " href="/Boissons">
                        <i></i>
                        <span>Boissons</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees " href="/Prestataires">
                        <i></i>
                        <span>Prestataires</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees " href="/Coordinateurs">
                        <i></i>
                        <span>Coordinateurs</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees active" href="/Communication">
                        <i class="fa fa-bullhorn" />
                        <span>Communication</span>
                    </a>
                </li>
                <li>
                    <a className="acceptees" href="/Billetterie">
                        <i></i>
                        <span>Billetterie</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
    
  );
}

export default BarPrestataires6;