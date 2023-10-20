const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000; // You can choose any port number you prefer
app.use(bodyParser.json());
// Route for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
  
    // Hash and salt the password using bcrypt
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        // Store the username and hashed password in your users.json file
        // Replace this with actual code to save data to your JSON file
        // For example, you can use the fs module to read/write JSON files
        const newUser = {
          username,
          password: hash, // Store the hashed password
        };
  
        // Replace this with code to save newUser to your JSON file
        // For now, let's assume you have a function called saveUser(newUser)
  
        saveUser(newUser);
  
        res.status(201).json({ message: 'User registered successfully' });
      }
    });
  });
  
  // Route for user login
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Replace this with code to retrieve the user's data by username
    // from your JSON file (e.g., users.json)
    // For now, let's assume you have a function called getUserByUsername(username)
  
    const user = getUserByUsername(username);
  
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
        } else if (result) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Authentication failed' });
        }
      });
    }
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
    