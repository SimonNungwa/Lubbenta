const path = require('path'); // Ensure this is at the top
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = 3000;

// Set the view engine to hbs
app.set('view engine', 'hbs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Register partials if needed
hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerPartials(path.join(__dirname, 'views/layouts'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Render the home.hbs template
app.get('/', (req, res) => {
  res.render('pages/home'); // Just pass the template name, no need for .hbs or the full path
});

app.get('/auctions', (req, res) => {
  res.render('pages/auctions'); // Just pass the template name, no need for .hbs or the full path
});

app.get('/login', (req, res) => {
  res.render('pages/login'); // Just pass the template name, no need for .hbs or the full path
});

app.get('/register', (req, res) => {
  res.render('pages/register'); // Just pass the template name, no need for .hbs or the full path
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


