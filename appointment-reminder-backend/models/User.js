const mongoose = require('mongoose');

// Schéma pour les utilisateurs
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
});

// Exporter le modèle User
module.exports = mongoose.model('User', UserSchema);