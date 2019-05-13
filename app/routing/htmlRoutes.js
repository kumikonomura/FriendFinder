const path = require('path')

// GET Route to /survey
module.exports = app => {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/survey.html'))
  })
  // Default catch-all route that leads to home.html
  app.use('*', (req, res) => {
    res.redirect(path.join(__dirname, '/../public/home.html'))
  })
}
