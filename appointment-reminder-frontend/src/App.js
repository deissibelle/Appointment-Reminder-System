import React from 'react';
import Login from './components/Login';
import Appointment from './components/Appointment';

const App = () => {
    return (
        <div>
            <h1>Appointment Reminder System</h1>
            <Login />
            <Appointment />
        </div>
    );
};

export default App;