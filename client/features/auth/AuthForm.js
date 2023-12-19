import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate, signup } from '../../app/store';
import { me } from '../../app/store';
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const handleLogin = async (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }))
      .then(() => {
        if (isLoggedIn) {
          window.location.pathname = "/home";
        }
      })

  };

  const HandleSignup = async (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const firstname = evt.target.firstname.value;
    const lastname = evt.target.lastname.value;
    const email = evt.target.email.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(signup({ firstname, lastname, email, username, password, method: formName }))
  }

  return (
    <div>
      {
        window.location.pathname === "/signup" ? (
          <form onSubmit={HandleSignup} name={name} id="signin-form">
            <h1>Don't have an account? <span>Sign up.</span></h1>
            <div class="input-container">
              <label htmlFor="firstname">
                <small>First Name</small>
              </label>
              <input name="firstname" type="text" required />
            </div>
            <div class="input-container">
              <label htmlFor="lastname">
                <small>Last Name</small>
              </label>
              <input name="lastname" type="text" required />
            </div>
            <div class="input-container">
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" required />
            </div>
            <div class="input-container">
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" required />
            </div>
            <div class="input-container">
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" required />
            </div>
            <div class="input-container">
              <button type="submit">{displayName}</button>
            </div>
            {error && <div> {error} </div>}
            <a href="/login">Have an account? Log in.</a>
          </form>
        ) : (
          <form onSubmit={handleLogin} name={name} id="signin-form">
            <h1>Have an existing account? <span>Log in.</span></h1>
            <div class="input-container">
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>
            <div class="input-container">
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div class="input-container">
              <button type="submit">{displayName}</button>
            </div>
            {error && <div> {error} </div>}
            <a href="/signup">Don't have one? Sign up here</a>
          </form>
        )
      }
    </div>
  );
};

export default AuthForm;
