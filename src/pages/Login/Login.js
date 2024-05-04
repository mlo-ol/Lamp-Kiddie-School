import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1') {
            // Successful login logic, redirect to the about page
            window.location.href = '/about';
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="login">
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    </div>
    );
};

export default Login;