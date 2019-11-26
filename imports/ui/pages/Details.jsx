import React from 'react';
import Image from 'react-bootstrap/Image'
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
            <div className="row">
                <div className="col">
                    <form onSubmit={this._handleSubmit}>
                        <input type="file" onChange={this._handleImageChange} />
                        <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                </div>
                <div className="col">
                    <div className="story-details">
                        
                    </div>
                </div>
            </div>

        );
    }

}