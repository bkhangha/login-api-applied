import React, { Component } from 'react';
import { useForm } from 'react-hook-form';

class Register extends Component {
  render() {
    return (
      <form action='/register/post' method='post'>
        <h2>Register</h2>
        <fieldset>
          <ul>
            <li>
              <label>First name:</label>
              <input name='fname'
                type="text"
                className="form-control"
                placeholder="First name" id="firstname" 
                required />
            </li><li>
              <label>Last Lame:</label>
              <input name='lname'
                type="text"
                className="form-control"
                placeholder="Last name"  id="lastname" 
                required />
            </li>
            <li>
              <label for="email">Email:</label>
              <input name='email'
                type="email"
                className="form-control"
                placeholder="Enter email" id="email" 
                required />
            </li>
            <li>
              <label for="password">Password:</label>
              <input name='pass'
                type="password"
                className="form-control"
                placeholder="Enter password" 
                required />
            </li>
          </ul>
        </fieldset>
        <button>Submit</button>
        <a href="/login">Have an Account?</a>
      </form>
    )
  }
}

export default Register;