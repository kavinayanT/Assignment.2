const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use express-ejs-layouts
app.use(ejsLayouts);

// Define the views folder
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" folder (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects route
app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
