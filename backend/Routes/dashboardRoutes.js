const express = require('express');
const router = express.Router();
const dashboardController = require('../Controllers/dashboardController');

// Define routes
router.get('/items', dashboardController.getAllItems);
router.get('/intensity', dashboardController.getIntensity);
router.get('/likelihood', dashboardController.getLikelihood);
router.get('/relevance', dashboardController.getRelevance);
router.get('/country', dashboardController.getCountry);
router.get('/topics', dashboardController.getTopics);
router.get('/region', dashboardController.getRegion);
router.get('/city', dashboardController.getCity);
router.get('/endYear/:endYear', dashboardController.getByEndYear);
router.get('/sector/:sector', dashboardController.getBySector);
router.get('/region/:region', dashboardController.getByRegion);
router.get('/topic/:topic', dashboardController.getByTopic);
router.get('/pest/:pest', dashboardController.getByPEST);
router.get('/source/:source', dashboardController.getBySource);
router.get('/swot/:swot', dashboardController.getBySWOT);

module.exports = router;
