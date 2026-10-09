const express = require('express');
const app = express();

// Home Page Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

// About Page Route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page of our site.</p>');
});

// Services Page Route
app.get('/services', (req, res) => {
    res.send(
        '<h1>Our Services</h1><ul><li>Web Development</li><li>App Development</li></ul>'
    );
});

// Contact Page Route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
});

// 404 - Page Not Found
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start Server
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
