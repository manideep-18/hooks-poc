import React, { Component } from 'react';
import BaseInput from '../../common/BaseInput';
import { validateEmpty } from '../../utils/ValidationUtils';

class LoginDemo extends Component {
  usernameRef;
  passwordRef;

  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = { username: '', password: '' };
  }

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  validateUserName = () => validateEmpty(this.state.username);

  validatePassword = () => validateEmpty(this.state.password);

  onBlur = () => {
    this.usernameRef.current.handleBlur();
    this.passwordRef.current.handleBlur();
  };

  onFocus = () => {
    this.usernameRef.current.onFocus();
  };

  onSubmitForm = () => {
    this.usernameRef.current.handleBlur();
    this.passwordRef.current.handleBlur();
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <BaseInput
          ref={this.usernameRef}
          value={this.state.username}
          onChange={this.handleUserNameChange}
          validate={this.validateUserName}
        />
        <BaseInput
          type='password'
          ref={this.passwordRef}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          validate={this.validatePassword}
        />
        <button type='submit' onClick={this.onSubmitForm}>
          submit
        </button>
      </div>
    );
  }
}

export default LoginDemo;
