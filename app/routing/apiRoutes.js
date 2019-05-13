// Defined friends with the path to the friends data
let friends = require('../data/friends.js')

// GET route with the url /api/friends
module.exports = app => {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible friends
    res.json(friends)
  })
  // POST routes /api/friends
  app.post('/api/friends', (req, res) => {
    // Grab the user's results to compare with other users
    let userResults = req.body.scores
  })
}