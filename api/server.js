const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const Users = require('../models/users-model')
const Habits = require('../models/habits-model')

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

// server.post('/register', (req, res) => {
//     console.log(req.body)
//     const { username, password } = req.body
//     !username || !password
//     ? res.status(400).json({ error: 'Please Provide a Username'})
//     : 
//     Users
//         .addUser(req.body)
//         .then(user => {
//             res.status(201).json(user)
//         })
//         .catch(err => {
//             res.status(505).json(err)
//         })
// })

// server.get('/:id', (req, res) => {
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

///////////////// habits
// server.get('/api/habits', (req, res) => {
//     Habits
//         .getHabits()
//         .then(habit => {
//             res.status(200).json(habit);
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// })

// server.post('/api/habits', (req, res) => {
//     console.log(req.body)
//     const { habit } = req.body
//     !habit || !req.body.user_id
//     // !habit
//     ? res.status(400).json({ error: 'Please Provide a Habit and User_ID'})
//     : 
//     Habits
//         .addHabit(req.body)
//         .then(habit => {
//             res.status(201).json(habit)
//         })
//         .catch(err => {
//             res.status(111).json(err)
//         })
// })

server.post('/api/habits', (req, res) => {
    console.log(req.body)
    const { habit } = req.body;
    // !habit || !req.body.user_id
    !habit
    ? res
        .status(400).json({ errorMessage: "Please provide text and a user_id for the habit." })
    : Habits 
        .insert(req.body)
        .then(habit => {
            res.status(201).json(habit);
        })
        .catch(err => {
            res.status(500).json({ error: "There was an error while saving the habit to the database" });
        })
})

//////////////////////////
// server.post('/api/users', (req, res) => {
//     db('users')
//     .insert(req.body)
//     .then(ids => {
//         const id = ids[0];
//         db('users')
//           .where({ id })
//           .first()
//           .then(cohort => {
//               res.status(201).json(cohort);
//           })
//           .catch(err => {
//               res.status(500).json(err)
//           })
//     })
// })

// server.get('/api/cohorts', (req, res) => {
//     db('cohorts')
//       .then(cohorts => {
//           res.status(200).json(cohorts);
//       })
//       .catch(error => {
//           res.status(500).json(error);
//       })
// })

// server.get('/api/cohorts/:id', (req, res) => {
//   const { id } = req.params;
//   db('cohorts')
//   .where({ id })
//   .first()
//   .then(cohort => {
//       if (cohort) {
//         res.status(200).json(cohort)
//       } else {
//         res.status(404).json({ message: 'Cohort Not Found'})
//       }
//     })
//   .catch(err => {
//     res.status(500).json(err)
//   })
// })

// server.get('/api/cohorts/:id/students', (req, res) => {
//   const { id } = req.params
//   db('students') //name of table/db
//       .join('cohorts', 'cohorts.id', 'students.cohort_id') //(table/db to join, whatTOJoin, whatElseToJoin)
//       .select('students.id', 'students.name', 'cohorts.name')//what do we want displayed in new joined table
//       .where('students.cohort_id', id) //we want these to match/locate
//       .then(cohortStudents => {
//           if (cohortStudents.length === 0) {
//               res.status(404).json({ message: 'That student is not in this cohort'})
//           } else {
//               res.status(200).json(cohortStudents)
//           }
//       })
//       .catch(err => {
//           res.status(500).json({ error: "Request Failed"})
//       })
// })

// server.delete('/api/cohorts/:id', (req, res) => {
//     db('cohorts')
//     .where({ id: req.params.id })
//     .del()
//     .then(count => {
//       if (count > 0) {
//         res.status(204).end()
//       } else {
//         res.status(404).json({ message: 'Not Found'})
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ error: 'error' })
//     })
// })

// server.put('/api/cohorts/:id', (req, res) => {
//   db('cohorts')
//   .where({ id: req.params.id })
//   .update(req.body)
//   .then(count => {
//     if (count > 0) {
//       res.status(200).json(count)
//     } else {
//       res.status(404).json({ message: 'Cohort Not Found'})
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'error'})
//   })
// })
//////////////////////////
 
module.exports = server;
