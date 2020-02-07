import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField
} from '@material-ui/core';
import PasswordField from 'material-ui-password-field';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
class Signup extends Component {
  render() {
    return (
      <div className="login">
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Sign Up Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Sign Up Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
