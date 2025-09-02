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

//Shop controllers
const createShop = async (req,res) =>{
     res.send('Create Shop')
}
const Shops = async (req,res) =>{
     res.send('get Shops')
}
const ShopById = async (req,res) =>{
     res.send('get Shops By Id')
}
const updateShops = async (req,res) =>{
     res.send('Update Shops')
}
const deleteShops = async (req,res) =>{
     res.send('Delete Shops')
}
const analyticsShops = async (req,res) =>{
     res.send('analytics Shops')
}
const shopsUsers = async (req,res) =>{
     res.send('get Shops')
}

module.exports = {
     shopProfiles, 
     shopbyId,
     changeUserRole, 
     changeUserStatus,

     createShop,
     Shops,
     ShopById,
     updateShops,
     deleteShops,
     analyticsShops,
     shopsUsers
};