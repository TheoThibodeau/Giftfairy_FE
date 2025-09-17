import React from "react";

const RegisterForm = ({ handleRegisterSubmit, nameInput, handleNameInput, emailInput, handleEmailInput, password, handlePasswordInput, handleLoginRegisterReturn}) => {

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <input
                type="string"
                placeholder="First Name"
                name="First Name"
                value={nameInput}
                onChange={handleNameInput}
                className={`inputButton `}
                required
                ></input>

                <input
                type="string"
                placeholder="Email"
                name="Email"
                value={emailInput}
                onChange={handleEmailInput}
                className={`inputButton `}
                required
                ></input>

                <input
                type="string"
                placeholder="Password"
                name="Password"
                value={password}
                onChange={handlePasswordInput}
                className={`inputButton `}
                required
                ></input>
                <button type="submit">Submit</button>
                <button 
                    type="button"
                    onClick={handleLoginRegisterReturn}
                    >Return to Login/Register Selection
                </button>
            </form>
        </>
    )
}

export default RegisterForm;