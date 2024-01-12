var express = require('express');
const ProjectsController = require('./ProjectsController')



const router = express.Router();




router
    .get('/', ProjectsController.index)
    .post('/', ProjectsController.create)
    .put('/:id', ProjectsController.update)
    .delete('/:id', ProjectsController.delete);






module.exports = router;