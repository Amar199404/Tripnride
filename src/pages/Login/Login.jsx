import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        if(email === 'admin@tripnride.com' && password === 'admin123'){
            navigate('/admin/dashboard');
        }else{
            setError('Invalid email or password');
        }
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Admin Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>

        </div>
    )
}

export default LogIn