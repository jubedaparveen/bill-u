const Shop = require('../models/shopModel');

const shopProfiles = async (req, res) => {
    res.send('Shop profile updated successfully');
}

const shopbyId = async (req, res) => {
    res.send('Shop details fetched successfully');     
}

const changeUserRole = async (req, res) => {
     res.send('User role changed successfully');
}

const changeUserStatus = async (req, res) => {
     res.send('User status changed successfully');
}

module.exports = {
     shopProfiles, 
     shopbyId,
     changeUserRole, 
     changeUserStatus
};