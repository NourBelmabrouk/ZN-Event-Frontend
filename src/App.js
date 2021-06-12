import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer';

import Home from './components/pages/Home';
import QuiSommeNous from './components/pages/QuiSommeNous';
import CommentCaMarche from './components/pages/CommentCaMarche';
import Contact from './components/pages/Contact';

import Lieux from './components/pages/Lieux';
import Traiteurs from './components/pages/Traiteurs';
import Boissons from './components/pages/Boissons';
import Animation from './components/pages/Animation';
import Communication from './components/pages/Communication';
import Prestataires from './components/pages/Prestataires';
import Packages from './components/pages/Packages';
import Coordinateurs from './components/pages/Coordinateurs';
import Billetterie from './components/pages/Billetterie';

import FichePrestations from './components/pages/FichePrestations';
import DemandePrestations from './components/pages/DemandePrestations';
import PrestationsAccepte from './components/pages/PrestationsAccepte';

import EvenementsBrouillon from './components/pages/EvenementsBrouillon';
import EvenementsValide from './components/pages/EvenementsValide';
import EvenementsTermine from './components/pages/EvenementsTermine';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
     <>
       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/QuiSommesNous' component={QuiSommeNous} />
           <Route path='/Contact' component={Contact} />
           <Route path='/CommentCaMarche' component={CommentCaMarche} />
           
           <Route path='/Lieux' component={Lieux} />
           <Route path='/Traiteurs' component={Traiteurs} />
           <Route path='/Animation' component={Animation} />
           <Route path='/Communication' component={Communication} />
           <Route path='/Prestataires' component={Prestataires} />
           <Route path='/Packages' component={Packages} />
           <Route path='/Boissons' component={Boissons} />
           <Route path='/Coordinateurs' component={Coordinateurs} />
           <Route path='/Billetterie' component={Billetterie} />

           <Route path='/FichePrestations' component={FichePrestations} />
           <Route path='/DemandePrestations' component={DemandePrestations} />
           <Route path='/PrestationsAccepte' component={PrestationsAccepte} />

           <Route path='/EvenementsBrouillon' component={EvenementsBrouillon} />
           <Route path='/EvenementsValide' component={EvenementsValide} />
           <Route path='/EvenementsTermine' component={EvenementsTermine} />
           
           
           
         </Switch>
         <Footer/>
       </Router>
     </>
    );
  }
}

export default App;