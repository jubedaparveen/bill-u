const Shop = require('../../models/shopModel')

const getAllShops = async (req, res) => {
    
    try {
        const Shops = await Shop.find({});
        res.status(200).json(Shops);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
};


const createShop = async (req, res) => {
    try {
        const newShop = new Shop(req.body); 
        const savedShop = await newShop.save();
        res.status(201).json(savedShop);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const getShopById = async (req, res) => {
    try {
        const getShop = await Shop.findById(req.params.id);
        if (!Shop)     
        return res.status(404).json({ message: 'Shop not found' });
        res.status(200).json(getShop);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const updateShop = async (req, res) => {
    try {
        const updateTheShop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!Shop) return res.status(404).json({ message: 'Shop not found' });
        res.status(200).json(updateTheShop);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const deleteShop = async (req, res) => {
    try {
        const deleteTheShop = await Shop.findByIdAndDelete(req.params.id);
        if (!deleteTheShop) return res.status(404).json({ message: 'Shop not found' });
        res.status(200).json({ message: 'Shop deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const getShopAnalytics = async (req, res) => {
    try {
        const analytics = {
            totalSales: 50000,
            totalOrders: 120,
            avgOrderValue: 416.67
        };
        res.status(200).json(analytics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = { getAllShops, createShop , getShopById, deleteShop , updateShop , getShopAnalytics}