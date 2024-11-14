import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setMessage('OTP sent to your phone.');
            setOtpSent(true);
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        // Lógica pour vérifier l'OTP ici
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {otpSent && (
                <form onSubmit={handleOtpSubmit}>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
                    <button type="submit">Verify OTP</button>
                </form>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;