import React from 'react';
import { useTextField } from '@react-aria/textfield';
import { useButton } from '@react-aria/button';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox } from '@react-aria/checkbox';

function TextField(props) {
  const { label } = props;
  let textfieldRef = React.useRef();
  let { labelProps, inputProps } = useTextField(props, textfieldRef);

  return (
    <div>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={textfieldRef} />
    </div>
  );
}

function Button(props) {
  let ref = React.useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

function Checkbox(props) {
  let state = useToggleState(props);
  let ref = React.useRef();
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {props.children}
    </label>
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      console.log(event.target.value, '???');
    }
  }

  componentDidMount() {
    // this.inputRef.current.focus();
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label='Email'
          placeholder='abc@example.com'
          onKeyDown={this.handleKeyDown}
          isRequired={true}
        />
        <Checkbox
          onChange={(isChecked) => alert(isChecked ? 'Checked!' : 'Unchecked')}
        >
          Check me
        </Checkbox>
        <Button>Test</Button>
      </div>
    );
  }
}

export default Login;
