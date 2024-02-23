let express = require('express')
let router = express.Router()
let Controllers = require('../controller')

// Adds a GET route to return all users
// http://localhost:8080/api/users/
router.get('/', (req, res) =>{
    Controllers.userController.getUser(res)
})

// Adds a POST route to create a new user
// http://localhost:8080/api/users/create
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

// Adds a PUT route to update a user 
// http://localhost:8080/api/users/<id>
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})
// Adds a PUT route to update a user 
// http://localhost:8080/api/users/<id>
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = router