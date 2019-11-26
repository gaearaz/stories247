import React from 'react';
import '../css/profileBiblio.css';
import Container from 'react-bootstrap/Container';

export default class ProfileBiblio extends React.Component {
    
  componentWillMount(){
    document.body.style.background= "white";
  }
  
  componentWillUnmount(){
    document.body.style.background = null;
  }

  render(){
      return  (

        <Container className="fill-form">
          <div> jksdfsdfdsfdsfsdf</div>
        </Container>
        );
    }
}