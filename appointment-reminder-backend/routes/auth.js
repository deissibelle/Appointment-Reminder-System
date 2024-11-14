const express = require('express');
const User = require('../models/User');
const twilio = require('twilio');

const router = express.Router();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Route pour l'authentification
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000); // Générer un OTP
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: user.phone,
        });

        res.json({ success: true, otp });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;