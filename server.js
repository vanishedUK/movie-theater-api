// Defining Server Const's
const express = require('express');
const app = express();
const sequelize = require('./db');
const port = 3000;

// Retreiving Models
const {User, Show} = require('./models/index');

// Get all users
app.get('/users', async(req, res) => {
    const allUsers = await User.findAll();
    res.send(allUsers);
})

// Get one user
app.get('/users/:id', async(req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.send(user);
})

// Get all shows watched by a user (id)
app.get('/users/:id', async(req, res) => {
    try {
        // Grabs user id
        const id = req.params.id;
        const user = await User.findByPk(id);

        // Finds all shows watched by user id
        
    } catch (err) {
        console.log(err);
    }
})


// Put update & add a show if a user has watched it





