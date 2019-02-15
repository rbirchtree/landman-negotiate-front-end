import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Consultation from './components/Consultation';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/consultation' component={Consultation}/>
            <Route path='/search' component={Search}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// footer hiring contact info
// remove live search later
//get an API for oil and gas info
//boostrap