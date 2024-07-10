const express = require('express');

const router = express.Router();

const verifToken = require('../middlewares/auth');

const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const userController = require('../controllers/UserController');

const { validateRegister, validateLogin } = require('../utils/validators/auth');
const { validateUser } = require('../utils/validators/user');

router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);
router.get('/admin/users', verifToken, userController.findUsers);
router.get('/admin/users/:id', verifToken, userController.findUserById);
router.post('/admin/users', verifToken, validateUser, userController.createUser);
router.put('/admin/users/:id', verifToken, validateUser, userController.updateUser);
router.delete('/admin/users/:id', verifToken, userController.deleteUser);

module.exports = router