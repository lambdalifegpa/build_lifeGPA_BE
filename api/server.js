const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const habitsRouter = require('../routes/habit-routes');
const usersRouter = require('../routes/user-routes');

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routing
server.use('/api/habits', habitsRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Welcome to the Jungle 🌴');
});
 
module.exports = server;
