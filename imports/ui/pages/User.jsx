import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import NavbarX from './NavbarX.jsx';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Componente from './Componente';
import Componente2 from './Componente2';

const routing = (
  <Router>
        <Route exact path="/user/c1" component={Componente} />
        <Route exact path="/user/c2" component={Componente2} />
  </Router>
)

const User = () => (
    <div>
      Mensaje de prueba
      { routing }
    </div>
  );
  
  export default User;

// export default class User extends React.Component {

//     render(){
//         <Container>
//             <Row>
//                 <div>
//                     <h2>Creaciones</h2>
//                 </div>
//             </Row>
//         </Container>
//     }
// }