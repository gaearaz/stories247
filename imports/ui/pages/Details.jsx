import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Switch from './Switch';
import Button from 'react-bootstrap/Button'
import '../css/details.css';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        
        
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this._handleSubmit}>
                            <input type="file" onChange={this._handleImageChange} />

                        </form>
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                    </div>
                    <div className="col">
                        <div className="story-details">
                            <div className="banner-details-title">
                                <h2>Detalles de la historia</h2>
                            </div>
                            <br></br>
                            <div className="details-title">
                                <Form.Label className="label-details-title">Titulo</Form.Label>
                                <Form.Control className="control-details-title" type="text" placeholder="Historia sin titulo" />
                            </div>
                            <div className="details-description">
                                <Form.Label className="label-details-description">Descripción</Form.Label>
                                <Form.Control className="control-details-description" as="textarea" rows="4" placeholder="Descripción de la historia" />
                            </div>
                            <div className="details-genre">
                                <Form.Label className="label-details-genre">Género</Form.Label>
                                <DropdownButton id="dropdown-variants-secondary-genre" variant="secondary" title="Géneros">
                                    <Dropdown.Item href="#/action-1">Acción</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Fantasía</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Ficción historica</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Comedia</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Poesía</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Otros</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="details-language">
                                <Form.Label className="label-details-language">Idioma</Form.Label>
                                <DropdownButton id="dropdown-variants-secondary-languages" variant="secondary" title="Idiomas">
                                    <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Inglés</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Francés</Dropdown.Item>
                                </DropdownButton>

                            </div>
                            <div className="details-clasification">
                                <Form.Label className="label-details-clasificatión">Clasificación (+18)</Form.Label>
                                <Switch
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Button href="/write" className="details-button-next" variant="outline-dark"><b>Siguiente</b></Button>
                
            </div>

        );
    }

}