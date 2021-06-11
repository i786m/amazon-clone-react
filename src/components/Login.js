import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazon logo'
          className='login__logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type='text' name='' id='' />
          <h5>Password</h5>
          <input type='password' name='' id='' />
          <button className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className='login__registerButton'>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
