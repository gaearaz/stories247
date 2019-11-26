import React from 'react';
//import sharedStyles from '../css/sharedStyles.css'
import '../css/profile.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NavbarX from './NavbarX';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Icon from '@material-ui/core/Icon';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default class Profile extends React.Component {
    
  componentWillMount(){
    document.body.style.background= "white";
  }
  
  componentWillUnmount(){
    document.body.style.background = null;
  }

    
    render(){
      return  (
        <Container fluid className="fill-window banner">
          <Row>
           <Col md={4}>
             <h3 className="left top">Creaciones</h3>
          </Col>
           <Col md={{ span: 4, offset: 4 }}>
             <h3 className="right top">Guardados</h3></Col>
          </Row>

          <Row>
            <Col>
              <Image src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e9f9917f4%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e9f9917f4%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2258.70000076293945%22%20y%3D%2294.68999996185303%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" roundedCircle className="image"  href="/profileConfig"/>
            </Col>
          </Row>

          <Row>
            <Col>
            <h2>Stevens</h2>
            </Col>
          </Row>

          <Row>
            <Col>
            <h7 style={{fontStyle: "thin"}}>@Hinoir1</h7>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="left-custom">


              <h3>
              <Button variant="light" href="/profileConfig">
              <Icon>settings_applications</Icon></Button>
                
                  Editar cuenta</h3>
            </Col>
          </Row>

          <Row>
            <Col>
            <div className="stripe">█████████████████████████████</div>
            </Col>
          </Row>

            <Row>
             <div className="fill-form2"><h4>Datos de usuario</h4>
             Sexo: <br></br>
             Nacionalidad:  <br></br>
             Edad:  <br></br>
             Cumpleaños: <br></br><br></br>
             <h4>Descripción <Icon>create</Icon></h4>
             <br></br>
             <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="modificator">
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
             </div>
            </Row>
            <Button id="button-modify-profile" variant="outline-dark" ><em>  Modificar  </em></Button>
          </Container>
        );
    }
}

// https://github.com/css-modules/css-modules
//export default CssMudule(Profile, {tableStyles})
//CSSModules(Profile, tableStyles)