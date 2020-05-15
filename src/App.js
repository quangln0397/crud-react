import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/index" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
