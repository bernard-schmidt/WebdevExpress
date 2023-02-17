const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router
  .route('/:id')
  .get((req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

// midleware runns after request and before response
// it means that param runns before router
// param is middleware, runs whenewer someone requests id

module.exports = router