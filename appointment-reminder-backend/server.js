import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Assurez-vous d'ajouter l'extension .js
import authRoutes from './routes/auth.js'; // Assurez-vous d'ajouter l'extension .js
import appointmentRoutes from './routes/appointments.js'; // Assurez-vous d'ajouter l'extension .js

// Charger les variables d'environnement
dotenv.config();

// Se connecter à la base de données
connectDB();

// Initialiser l'application
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Définir les routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});