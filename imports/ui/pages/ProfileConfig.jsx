import React from 'react';
import '../css/profileConfig.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Icon from '@material-ui/core/Icon';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import SplitButton from 'react-bootstrap/SplitButton'


export default class ProfileConfig extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title: "Selección",
            file: '',
            profilePhotoPreviewUrl: '',

        };
        
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                profilePhotoPreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    changeValueGenre(text) {
        this.setState({title: text})
    }
    
    componentWillMount(){
        document.body.style.background= "white";
    }
    
    componentWillUnmount(){
        document.body.style.background = null;
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    render(){
        let { profilePhotoPreviewUrl } = this.state;
        let $profilePhotoPreview = null;
        if (profilePhotoPreviewUrl) {
            $profilePhotoPreview = (<img src={profilePhotoPreviewUrl} />);
        }
      return  (

        <Container className="h2mod h2modsize">
          <Row>
          <Button className="btn-nav cancel-button" variant="warning">Cancelar</Button>
          <div className="fill-banner stripe"><h2 style={{ paddingTop: '0.5%'}}>Configuración de cuenta y privacidad</h2></div>
          </Row>

        <Row className="justify-content-md-center h2modsize">

             <Col> Contraseña</Col>
            <Col><Form.Control type="password" placeholder="Digita tu contraseña" /></Col>
           </Row>

            <Row className="justify-content-md-center h2modsize">

            <Col> Correo Electrónico: </Col>
            <Col><Form.Control type="email" placeholder="Digita tu email" /></Col>
            </Row>

            <Row className="justify-content-md-center h2modsize">

            <Col> Nombre:</Col>
            <Col><Form.Control type="password" placeholder="Digita tu nombre" /></Col>
            </Row>

            <Row className="justify-content-md-center h2modsize">

            <Col> Fecha de nacimiento: </Col>
            <Col><Form.Control type="email" placeholder="Escribe tu fecha de nacimiento" /></Col>
            </Row>

            <Row className="justify-content-md-center h2modsize">

            <Col> Género: </Col>
            <Col>{[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    size="sm"
                    variant="secondary"
                    title= {this.state.title}
                    id={`dropdown-button-drop-${idx}`}
                    key={idx}
                >
                 <Dropdown.Item  onClick={(e) => this.changeValueGenre(e.target.textContent)} >Masculino</Dropdown.Item>
                <Dropdown.Item  onClick={(e) => this.changeValueGenre(e.target.textContent)} >Femenino</Dropdown.Item>
                 </DropdownType>
                ))}
            </Col>
            </Row>

            <Row className="justify-content-md-center h2modsize">

            <Col> Ubicación: </Col>
            <Col><Form.Control type="email" placeholder="Escribe tu fecha de nacimiento" /></Col>
            </Row>

            <form onSubmit={this._handleSubmit}>
                            <input type="file" onChange={this._handleImageChange} />

                        </form>

            <div className="profilePhotoPreview">
                            {$profilePhotoPreview}
                        </div>
            <Button id="button-modifyxD" variant="outline-dark" ><em>  Guardar  </em></Button>
          </Container>
        );
    }
}
