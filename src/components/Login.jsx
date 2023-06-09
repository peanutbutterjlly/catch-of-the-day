import PropTypes from 'prop-types';
import React from 'react';

export default function Login(props) {
  return (
    <nav className="login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory.</p>
      <button
        className="github"
        onClick={() => props.authenticate('Github')}
        type="button"
      >
        Log in with Github
      </button>
      <button
        className="twitter"
        onClick={() => props.authenticate('Twitter')}
        type="button"
      >
        Log in with Twitter
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate('Facebook')}
        type="button"
      >
        Log in with Facebook
      </button>
    </nav>
  );
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
