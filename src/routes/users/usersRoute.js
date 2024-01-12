var express = require('express');
const UsersController = require('./UsersController')



const router = express.Router();




router.get('/', UsersController.index);

router.post('/', UsersController.create);

router.put('/:id', UsersController.update);

router.delete('/:id', UsersController.delete);






module.exports = router;