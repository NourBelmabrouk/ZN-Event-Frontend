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
import Contact from './components/pages/Contact';
import CommentCaMarche from './components/pages/CommentCaMarche';
import Footer from './components/footer/Footer';

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
           <Route path='/Lieux' component={Lieux} />
           <Route path='/Traiteurs' component={Traiteurs} />
           <Route path='/Animation' component={Animation} />
           <Route path='/Communication' component={Communication} />
           <Route path='/Prestataires' component={Prestataires} />
           <Route path='/Packages' component={Packages} />
           <Route path='/Contact' component={Contact} />
           <Route path='/CommentCaMarche' component={CommentCaMarche} />
         </Switch>
         <Footer/>
       </Router>
     </>
    );
  }
}

export default App;