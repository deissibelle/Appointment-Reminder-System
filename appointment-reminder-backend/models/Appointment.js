const mongoose = require('mongoose');

// Schéma pour les rendez-vous
const AppointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'scheduled' },
});

// Exporter le modèle Appointment
module.exports = mongoose.model('Appointment', AppointmentSchema);