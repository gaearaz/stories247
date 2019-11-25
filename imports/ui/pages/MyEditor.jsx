import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import '../css/myEditor.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  componentWillMount(){
    document.body.style.background= "black";
}

componentWillUnmount(){
    document.body.style.background = null;
}

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }



  render() {
    return (
      <div className="container-xd">
        <Form.Control id="story-title" type="text" placeholder="Titulo de tu historia" />
    
        <div className="row">
          <div className="column">
            <div className="editorContainer">
              <h4>Opciones de texto</h4>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button variant="outline-dark" onClick={this.onUnderlineClick}>Subrayar</Button>
              <br></br>
              <br></br>
              <Button variant="outline-dark" onClick={this.onBoldClick}><b>Negrita</b></Button>
              <br></br>
              <br></br>
              <Button variant="outline-dark" onClick={this.onItalicClick}> <em>  Cursiva  </em> </Button>
            </div>
          </div>
          <td></td>
          <td></td>
          <td></td>
          <div className="column">
            <div className="editors">
              <Editor
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
              />
            </div>


          </div>
        </div>
        <td></td>
        <Button id="button-post" variant="outline-warning" onClick={this.onItalicClick}><em>  Publicar  </em></Button>

      </div>

    )
  }
}

export default MyEditor