const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

router.route('/').post(jobsController.createJob).get(jobsController.getAllJobs);

router.route('/stats').get(jobsController.showStats);
router.route('/:id').delete(jobsController.deleteJob).patch(jobsController.updateJob);

module.exports = router;