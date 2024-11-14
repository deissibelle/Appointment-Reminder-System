const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');

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