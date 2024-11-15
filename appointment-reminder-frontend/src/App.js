import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Appointment from './components/Appointment';
import './App.css'; // Importer le fichier CSS

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleShowRegister = () => {
        setShowRegister(true);
    };

    return (
        <div className="container">
            <h1>Appointment Reminder System</h1>
            {!isLoggedIn ? (
                showRegister ? (
                    <Register onRegister={() => setShowRegister(false)} />
                ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                )
            ) : (
                <Appointment />
            )}
            {!showRegister && !isLoggedIn && (
                <button onClick={handleShowRegister}>Go to Register</button>
            )}
        </div>
    );
};

export default App;