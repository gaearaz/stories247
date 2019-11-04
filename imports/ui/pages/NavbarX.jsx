import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/navbar.css'
import NavItem from 'react-bootstrap/NavItem';

export default class NavbarX extends React.Component {
  render() {
    return (
      <Navbar className="nav-x" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Button className="btn-nav" variant="warning">
            24/7
          </Button>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#write">
            <Button className="btn-nav" variant="warning">
              Escribir
            </Button>
          </Nav.Link>
          <NavDropdown className="dropdown-nav" title="Categorias " >
            <pre> <b>  Aventurarme con...</b></pre>
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
        <FormControl type="text" placeholder="Search" className="form-nav"/>    
        <Nav className="ml-auto">
        <Button className="btn-nav" variant="warning">
          
            <b>Acceder</b>
          </Button>
          
        </Nav>
        

      </Navbar>
    );
  }
}