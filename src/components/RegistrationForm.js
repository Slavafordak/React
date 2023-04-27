
import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Row, Col, Button} from 'reactstrap';

class RegistrationForm extends Component {
  state = {
    login: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    middleName: '',
    formErrors: {
      login: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      middleName: ''
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value}, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.formValid()) {
      console.log(`Registration data: 
        Login: ${this.state.login}, 
        Password: ${this.state.password}, 
        First Name: ${this.state.firstName}, 
        Last Name: ${this.state.lastName}, 
        Middle Name: ${this.state.middleName}`);
    }
  };

  formValid = () => {
    const {formErrors, ...formData} = this.state;
    let valid = true;

    // Check that all fields are filled
    Object.values(formData).forEach(value => {
      if (!value) {
        valid = false;
      }
    });

    // Check that passwords match
    if (this.state.password !== this.state.confirmPassword) {
      valid = false;
      formErrors.confirmPassword = 'Пароли не совпадают';
    }

    this.setState({formErrors: formErrors});
    return valid;
  };

  validateField = (fieldName, value) => {
    let formErrors = {...this.state.formErrors};

    switch(fieldName) {
      case 'login':
        formErrors.login = value.length < 3 ? 'Необходимо минимум 3 символа' : '';
        break;
      case 'password':
        formErrors.password = value.length < 6 ? 'Необходимо минимум 6 символа' : '';
        break;
      case 'confirmPassword':
        formErrors.confirmPassword = this.state.password !== value ? 'Пароли не совпадают' : '';
        break;
      case 'firstName':
        formErrors.firstName = value.length < 1 ? 'Необходимо' : '';
        break;
      case 'lastName':
        formErrors.lastName = value.length < 1 ? 'Необходимо' : '';
        break;
      case 'middleName':
        formErrors.middleName = '';
        break;
      default:
        break;
    }

    this.setState({formErrors: formErrors});
  };

  render() {
    const {formErrors} = this.state;
    return (
      <>
        <div className="d-flex justify-content-center align-items-center pt-36">
        <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Логин</Label>
              <Input name="login" type="text" onChange={this.handleInputChange} />
              {formErrors.login && <div className="error-message">{formErrors.login}</div>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Пароль</Label>
              <Input name="password" type="password" onChange={this.handleInputChange} />
              {formErrors.password && <div className="error-message">{formErrors.password}</div>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Подтверждение пароля</Label>
              <Input name="confirmPassword" type="password" onChange={this.handleInputChange} />
              {formErrors.confirmPassword && <div className="error-message">{formErrors.confirmPassword}</div>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Фамилия</Label>
              <Input name="firstName" type="text" onChange={this.handleInputChange} />
              {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Имя</Label>
              <Input name="lastName" type="text" onChange={this.handleInputChange} />
              {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="col-auto bg-zinc-800 text-white-50 ">
              <Label>Отчество</Label>
              <Input name="middleName" type="text" onChange={this.handleInputChange} />
              {formErrors.middleName && <div className="error-message">{formErrors.middleName}</div>}
            </FormGroup>
          </Col>
          <Col md={12} className="text-center">
            <Button color="primary" type="submit">Register</Button>
          </Col>
        </Row>
      </Form>
        </div>
      </>
      
    );
  }
}

export default RegistrationForm;