import React from 'react';
import sharedStyles from './css/sharedStyles.css'
import loginStyles from '../css/login.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NavbarX from './pages/NavbarX.jsx';

const tableStyles = {...styles, ...sharedStyles }

export default class Profile extends React.Component {
    
    
    render(){
        <NavbarX/>

    }

}


// https://github.com/css-modules/css-modules
//export default CssMudule(Profile, {tableStyles})