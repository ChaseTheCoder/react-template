import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import GetInvolved from './components/pages/GetInvolved';
import Admission from './components/pages/Admission';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/react-template/" exact component={Home}/>
          <Route path="/react-template/about" exact component={About}/>
          <Route path="/react-template/get-involved" exact component={GetInvolved}/>
          <Route path="/react-template/admission" exact component={Admission}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
