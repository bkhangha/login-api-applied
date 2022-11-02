import React, { Component } from 'react';
import { useForm } from 'react-hook-form';

export default class Login extends Component {
  render() {
    return (
      <form action='/login/post' method='post'>
        <h2>Welcome Back!</h2>
        <fieldset>
          <ul>
            <li>
              <label>Username:</label>
              <input name='email'
                type="email"
                className="form-control"
                placeholder="Enter email" 
                required />
            </li>
            <li>
              <label>Password:</label>
              <input name='pass'
                type="password"
                className="form-control"
                placeholder="Enter password"
                required />
            </li>
          </ul>
        </fieldset>
        <button>Login</button>
        <a href='/register'>Create an Account</a>
      </form>
    )
  }
}