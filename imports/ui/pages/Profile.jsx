import React from 'react';
//import sharedStyles from '../css/sharedStyles.css'
import '../css/profile.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NavbarX from './NavbarX';

//const tableStyles = {...loginStyles, ...sharedStyles }

export default class Profile extends React.Component {
    
    
    render(){
      return  (<div className="fill-window">Mensaje de prueba</div>
        
        
        );

    }

}


// https://github.com/css-modules/css-modules
//export default CssMudule(Profile, {tableStyles})
//CSSModules(Profile, tableStyles)