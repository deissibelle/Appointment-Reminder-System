import mongoose from 'mongoose';

// Schéma pour les utilisateurs
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
});

// Exporter le modèle User
export default mongoose.model('User', UserSchema);