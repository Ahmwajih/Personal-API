const router = require('express').Router();
const { Department } = require('../controllers/department.controller');

const {isAdmin, isLead, isActive} = require('../middlewares/authorisation');


router.route('/')
    .get(isAdmin, Department.getAll)
    .post(isAdmin, Department.create);

router.route('/:id')
    .get(isAdmin, Department.getOne)
    .put(isAdmin, Department.update)
    .delete(isAdmin, Department.delete);

module.exports = router;