//routers/index.js
const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

//AssignMent to EndPoints
router.get('/'    , PagesController.home); 
router.get('/table', PagesController.table);
router.get('/log'  , PagesController.log);
router.get('/about'  , PagesController.about);

router.post('/applications', ApplicationsController.store);

module.exports = router;