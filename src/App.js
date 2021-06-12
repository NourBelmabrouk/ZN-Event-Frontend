import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/pages/Home';
import QuiSommeNous from './components/pages/QuiSommeNous';
import Lieux from './components/pages/Lieux';
import Traiteurs from './components/pages/Traiteurs';
import Animation from './components/pages/Animation';
import Communication from './components/pages/Communication';
import Prestataires from './components/pages/Prestataires';
import Packages from './components/pages/Packages';
<<<<<<< Updated upstream
=======
import Contact from './components/pages/Contact';
import CommentCaMarche from './components/pages/CommentCaMarche';
import Footer from './components/footer/Footer';
import AddPlace from "./components/pages/AddServices/AddPlace";
import AddFood from "./components/pages/AddServices/AddFood";
import AddAutre from "./components/pages/AddServices/AddAutre";
>>>>>>> Stashed changes

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Cards from './components/CardsPrestatires/Cards';

class App extends Component {
  render() {
    return (
     <>
       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/QuiSommesNous' component={QuiSommeNous} />
           <Route path='/Lieux' component={Lieux} />
           <Route path='/Traiteurs' component={Traiteurs} />
           <Route path='/Animation' component={Animation} />
           <Route path='/Communication' component={Communication} />
           <Route path='/Prestataires' component={Prestataires} />
           <Route path='/Packages' component={Packages} />
<<<<<<< Updated upstream
           <Route path='/Cards' component={Cards} />

=======
           <Route path='/Contact' component={Contact} />
           <Route path='/CommentCaMarche' component={CommentCaMarche} />
           <Route path='/AddPlace' component={AddPlace} />
           <Route path='/AddFood' component={AddFood} />
           <Route path='/AddAutre' component={AddAutre} />
>>>>>>> Stashed changes
         </Switch>
       </Router>
     </>
    );
  }
}

export default App;