const express = require('express');
const router = express.Router();

const Users = require('../models/users-model')
const db = require('../database/dbConfig')
const bcrypt = require('bcryptjs');


const { authenticate, generateToken } = require('../auth/authenticate');

router.post('/register', (req, res) => {
    console.log(req.body)
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    !user.username || !user.password
    ? res.status(400).json({ error: 'Please Provide a Username'})
    : 
    Users
        .addUser(req.body)
        .then(user => {
            const token = generateToken(user);
            res.status(201).json({user, token})
        })
        .catch(err => {
            res.status(505).json(err)
        })
})

router.post('/login', (req, res) => {
    // implement user login
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
  
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  
  })

// router.get('/:id', (req, res) => { // could be dangerous if all USER info is available when logged in.. true.. very dangerous
//     const { id } = req.params
//     Users
//     .getUser(id)
//     .then(user => {
//         res.status(200).json(user);
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     })
// })

router.get('/:id/habits', (req, res) => {
    const id = req.params.id
    db('users')
      .where({id})
      .then(user => {
        db('habitss')
          .where({user_id: id})
          .then(habits => res.status(200).json({...user[0], habits}))
      })
      .catch(err  => res.status(500).json(err))
  })

module.exports = router;