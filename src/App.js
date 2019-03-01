import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './components/Home';
import Consultation from './components/Consultation';
import Search from './components/Search';
import './App.css';
//<Route path='/landmenlogin' component={LandmenLogin}/>
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="full-width container">
          <Navbar/>
          <Banner/>
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