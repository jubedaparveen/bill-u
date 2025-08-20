const express = require('express');
const { shopProfiles, shopbyId, changeUserStatus, changeUserRole } = require('../controllers/superadmincontroller');
const superadminRouter = express.Router();

superadminRouter.get('/users/me', shopProfiles)
superadminRouter.get('/users/:id', shopbyId);
superadminRouter.put('/users/:id/role', changeUserRole);
superadminRouter.put('/users/:id/status', changeUserStatus);

module.exports = superadminRouter;