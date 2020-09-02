import React, { Component } from 'react';

class BaseInput extends Component {
  inputRef;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { error: '' };
  }

  setError = (error): void => {
    this.setState({ error: error });
  };

  validateInput = () => {
    const { validate } = this.props;

    if (validate) {
      const result = validate();

      if (result.shouldShowError) {
        this.setError(result.errorMessage);
      } else this.setError('');
    }
  };

  handleBlur = () => {
    const { shouldValidateOnBlur } = this.props;
    if (shouldValidateOnBlur) {
      this.validateInput();
    }
  };

  onFocus = () => {
    this.setError('');
  };

  render() {
    const { error } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <input
          type='text'
          ref={this.inputRef}
          onBlur={this.handleBlur}
          onFocus={this.onFocus}
          {...this.props}
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
}

export default BaseInput;

BaseInput.defaultProps = {
  validate: () => ({ shouldShowError: false, errorMessage: '' }),
  shouldValidateOnBlur: true,
};
