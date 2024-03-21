import React from "react";

const LoginForm = ({ handleLoginSubmit, emailInput, handleEmailInput, password, handlePasswordInput, handlePasswordReset}) => {

    return (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="string"
              placeholder="Email"
              name="Email"
              value={emailInput}
              onChange={handleEmailInput}
              className={`inputButton `}
            ></input>

            <input
              type="string"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={handlePasswordInput}
              className={`inputButton `}
            ></input>
            <button type="submit">Submit</button>
            <a className="forgotPassword" onClick={handlePasswordReset}>
              Forgot Password
            </a>
          </form>
        </>
    )
};

export default LoginForm;