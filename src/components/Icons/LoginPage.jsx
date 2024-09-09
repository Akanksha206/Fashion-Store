
import React from 'react';
import '../styles/style.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <form className="login-form">
                <h2>Login Form</h2>
                <div>
                    <label htmlFor="username">Username:  </label>
                    <input type="text" id="username" placeholder="Enter username" />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="********" />
                </div>
                <br />
                <button type="submit" id="login">Login</button>
                <br />
                <div className="options">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <br />
                <button type="button" id="cancel">Cancel</button>
            </form>
        </div>
    );
};

export default LoginPage;
