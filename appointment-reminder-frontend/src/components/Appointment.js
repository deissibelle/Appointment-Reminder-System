import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleAddAppointment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/appointments', { userId: 'user_id_here', date, time });
            setMessage('Appointment scheduled successfully.');
        } catch (error) {
            setMessage('Failed to schedule appointment.');
        }
    };

    return (
        <div>
            <h2>Schedule Appointment</h2>
            <form onSubmit={handleAddAppointment}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                <button type="submit">Schedule Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Appointment;