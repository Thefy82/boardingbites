const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

console.log('Starting server...');

// Use the cors middleware
const corsOptions = {
    origin: 'http://127.0.0.1:5501/contact.html', // Replace with your frontend's URL
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('${req} ${req.url}');
    next();
});

app.use(express.json());

// Endpoint to handle POST requests
app.post('/api/messages', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
        console.error('Validation error: All fields are required');
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Handle the message (e.g., save to database, send email, etc.)
    // For this example, we'll just return a success message
    console.log('Received message:', { name, email, subject, message });
    res.status(200).json({ message: 'Message sent successfully' });
});

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log('Server running at http://localhost:${port}');
    }
});
