import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarX from './pages/NavbarX.jsx';

const App = () => (
  <div>
    <NavbarX/>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);



export default App;

