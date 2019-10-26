import logo from '../../assets/img/logo.svg'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Form } from 'react-bootstrap'

class AuthForm extends React.Component {
  get isLogin() {
    return this.props.authState === STATE_LOGIN
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  renderButtonText() {
    const { buttonText } = this.props

    if (!buttonText && this.isLogin) {
      return 'Login'
    }

    if (!buttonText && this.isSignup) {
      return 'Signup'
    }

    return buttonText
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
    } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img src={logo} className="rounded" style={{ width: 320, height: 240, cursor: 'pointer' }} alt="logo"/>
          </div>
        )}
        <Form.Group>
          <Form.Label htmlFor={usernameLabel}>{usernameLabel}</Form.Label>
          <Form.Control {...usernameInputProps} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor={passwordLabel}>{passwordLabel}</Form.Label>
          <Form.Control {...passwordInputProps} />
        </Form.Group>
        {this.isSignup && (
          <Form.Group>
            <Form.Label htmlFor={confirmPasswordLabel}>{confirmPasswordLabel}</Form.Label>
            <Form.Control {...confirmPasswordInputProps} />
          </Form.Group>
        )}
        <Form.Group>
          <Form.Check type="checkbox" label={this.isSignup ? 'Agree the terms and policy' : 'Remember me'} />
        </Form.Group>
        <hr />
        <Button size="lg" className="bg-gradient-theme-left border-0" block onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>
      </Form>
    )
  }
}

export const STATE_LOGIN = 'LOGIN'
export const STATE_SIGNUP = 'SIGNUP'

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
}

AuthForm.defaultProps = {
  authState: STATE_LOGIN,
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com'
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password'
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password'
  },
}

export default AuthForm
