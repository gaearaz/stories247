import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/navbar.css'
import NavItem from 'react-bootstrap/NavItem';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router';

export default class NavbarX extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }


  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Button className="btn-nav" variant="warning" onClick={this.handleLogoutClick}>
                  <Image src="/user.png"/>
                  <b> Acceder</b>
                </Button>
    } else {
      button = <Button className="btn-nav" variant="warning" onClick={this.handleLoginClick}>
                  <Image src="/user.png"/>
                  <b>  Salir </b>
                </Button>
    }

    return (
      <Navbar fixed="top" className="nav-x" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          
          <Button className="btn-nav" variant="warning">
            24/7
          </Button>
          
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/details">
            <Button className="btn-nav" variant="warning">
              Escribir
            </Button>
          </Nav.Link>
          <NavDropdown className="dropdown-nav" title="Categorias " >
            <pre> <b>  Aventurarme con...    </b></pre>
            <NavDropdown.Header />
            <NavDropdown.Item href="#cat-action">Acción</NavDropdown.Item>
            <NavDropdown.Item href="#cat-fantasy">Fanatasía</NavDropdown.Item>
            <NavDropdown.Item href="#cat-romance">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#cat-historical-fiction">Ficción historica</NavDropdown.Item>
            <NavDropdown.Item href="#cat-horror">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#cat-comedy">Comedia</NavDropdown.Item>
            <NavDropdown.Item href="#cat-poesy">Poesía</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
          </NavDropdown>


        </Nav>
        <Form className="form-nav">
          <FormControl type="text" placeholder="Buscar libros..."  />
          <Button href="/search" className="btn-search" variant="outline-warning">
            Buscar
        </Button>
        </Form>
        <Nav className="ml-auto">
        <Button className="btn-nav-profile" variant="warning" href="/profile">
            <b> Mi Perfil</b>
        </Button>
        {button}

          

        </Nav>
        

        
      </Navbar>
    );
  }
}