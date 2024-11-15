import express from 'express';
import Appointment from '../models/Appointment.js'; // N'oubliez pas d'ajouter l'extension .js

const router = express.Router();

// Route pour ajouter un rendez-vous
router.post('/', async (req, res) => {
    const { userId, date, time } = req.body;
    try {
        const appointment = new Appointment({ userId, date, time });
        await appointment.save();
        res.json({ success: true, appointment });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Route pour annuler un rendez-vous
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Appointment.findByIdAndDelete(id);
        res.json({ success: true, message: 'Appointment cancelled' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;