import React from 'react';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarX from './pages/NavbarX.jsx';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import User from '/imports/ui/pages/User';
import Profile from '/imports/ui/pages/Profile'

const routing = (
  <Router>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />     
  </Router>
)

 const App = () => (
   <div>
     <NavbarX/>
      { routing }
   </div>
 );


 export default App;

