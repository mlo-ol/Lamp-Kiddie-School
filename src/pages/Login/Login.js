import React, { useState } from 'react';
import './Login.scss';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleLogin = async () => {
        try{
            const res = await axios.post('https://lks-server.onrender.com/login', {
                username,
                password,
            });

            if (res.data.success) {
                document.cookie = `token=${res.data.token}; path=/;`; // Save the token to the cookies
                window.location.href = '/admin';  // Successful login, redirect to the admin page
            } else {
                setErrorMessage(res.data.message);
            }

        }catch (error) {
            console.error(error);
            setErrorMessage('An error occurred during login');
        }

    };

    return (
        <div className="login" data-aos="fade" data-aos-duration="1000">
        <div className="login-container" data-aos="fade-up" data-aos-duration="1000">
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