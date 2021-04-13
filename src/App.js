
import './App.css';

import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Navbar />
    );
  }
}

export default App;