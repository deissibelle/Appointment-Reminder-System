import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setMessage('OTP sent to your phone. Please check your SMS.');
            setOtpSent(true);
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        // Vérification de l'OTP ici (à implémenter)
        onLoginSuccess(); // Appel de la fonction pour passer à la page des rendez-vous
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            {otpSent && (
                <form onSubmit={handleOtpSubmit}>
                    <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                    <button type="submit">Verify OTP</button>
                </form>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;