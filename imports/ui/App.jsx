import React from 'react';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarX from './pages/NavbarX.jsx';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import User from '/imports/ui/pages/User';
import Profile from '/imports/ui/pages/Profile'
import MyEditor from '/imports/ui/pages/MyEditor'
import ProfileConfig from '/imports/ui/pages/ProfileConfig'


const routing = (
  <Router>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/write" component={MyEditor} />   
        <Route exact path="/profileConfig" component={ProfileConfig} />        
     
  </Router>
)

 const App = () => (
   <div>
     <NavbarX/>
      { routing }
   </div>
 );


 export default App;

