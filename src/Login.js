import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SimpleReactValidator from 'simple-react-validator';
import {Link} from 'react-router-dom';
import reactDom from 'react-dom';

export class Login extends Component {
    state = {cf: ""};

    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
    }

    validator = new SimpleReactValidator({
      messages: {
        cf: "Invalid cf",
      }
    });

    validateForm() {
      return this.state.cf.length > 0;
    }


    handleSubmit = e => {
      e.preventDefault();
      this.validator.showMessages();
      this.forceUpdate();
    };

  render() {
    return (
     <React.Fragment>
         <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Codice Fiscale</Form.Label>
    <form onChange={this.handleSubmit}>
      <Form.Control type="text"  placeholder="Inserisci codice fiscale" id="cf" required="" name="cf" validated='false' onChange={e => this.setState({ cf: e.target.value })}/>
      {this.validator.message("codice fiscale", this.state.cf, "required|cf")}
    </form>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button href='/inserimento' disabled={!this.validator}>
    Login
  </Button>
</Form>
     </React.Fragment>
    )
  }
}

export default Login