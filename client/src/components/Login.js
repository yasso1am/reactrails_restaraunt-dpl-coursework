import React, { Fragment } from 'react';
import { login } from '../fakeAuth';

const Login = ({ history}) => (
  <Fragment>
    <h3>Login to see our lovely restaurant</h3>
    <button
      onClick={ () => {
        login()
        history.push('/')
      }}
    >
      Easy Login
    </button>
  </Fragment>

)

export default Login