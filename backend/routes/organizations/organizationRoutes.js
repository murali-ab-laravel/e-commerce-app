const express = require('express');

const orgController = require('../../controllers/organizations/OrganizationsController');

const orgCtrl = new orgController();

const router = express.Router();

router.post('/org', orgCtrl.createOrganization);
router.get('/org/:id', orgCtrl.getOrganizationById);

module.exports = router;