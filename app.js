const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

// Set the static path to the directory containing your static files
const static_path = path.join(__dirname, "public");

app.use(express.static(static_path));

// Set up routes
app.get('/', (req, res) => {
    const filePath = path.join(static_path, 'main', 'index.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error while loading HTML file');
      }
    });
});

app.get('/about', (req, res) => {
    const filePath = path.join(static_path, 'component', 'about.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error while loading HTML file');
      }
    });
});

app.get('/contact', (req, res) => {
    const filePath = path.join(static_path, 'component', 'contact.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error while loading HTML file');
      }
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
