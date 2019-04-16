const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/authenticate');
const db = require('../database/dbConfig')
const Habit = require('../models/habits-model')

router.post('/', authenticate, (req, res) => { 
    // Habit
    // .addHabit(req.body)
    db('habitss')
    .insert(habit)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/', authenticate, (req, res) => {
    db('habitss')
    .then(habit => {
        res.status(200).json(habit)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    db('habitss')
    .where({ id })
    .first()
    .then(habit => {
        if (habit) {
          res.status(200).json(habit)
        } else {
          res.status(404).json({ message: 'User Not Found'})
        }
      })
    .catch(err => {
      res.status(500).json(err)
    })
  })

router.delete('/:id', authenticate, (req, res) => {
    db('habitss')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'Not Found'})
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Request Failed' })
    })
})

router.put('/:id', authenticate, (req, res) => {
    db('habitss')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json(count)
      } else {
        res.status(404).json({ message: 'Habit Not Found'})
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Request Failed'})
    })
  })

module.exports = router;