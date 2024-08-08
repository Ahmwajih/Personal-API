const router = require('express').Router();

const { Personnel } = require('../controllers/personnel.controller');

const {isAdmin, isLead, isActive} = require('../middlewares/authorisation');


router.route('/')
    .get(isAdmin, Personnel.getAll)
    .post(isAdmin, Personnel.create);


router.route('/:id')
    .get(isAdmin, Personnel.getOne)
    .put(isAdmin, Personnel.update)
    .delete(isAdmin, Personnel.delete);



router.post('/login', Personnel.login);
router.all('logout', Personnel.logout);

module.exports = router;