import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SimpleReactValidator from 'simple-react-validator';

export class Login extends Component {
   
    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {cf:'',pwd:''};
    }
  render() {
    return (
     <React.Fragment>
         <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Codice Fiscale</Form.Label>
    <Form.Control type="text"  placeholder="Inserisci codice fiscale" validated='false'/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
     </React.Fragment>
    )
  }
}

export default Login