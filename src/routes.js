const express = require('express')
const StoreProductHandler = require('./StoreProductHandler')
const routes = express.Router();

const storeHandler = new StoreProductHandler();
routes.get('/products', async (req, res)=>{
    const products = await storeHandler.getProductsByName(req.query.name);
    return res.send(products);
})

routes.get('/product', async (req, res)=>{
    const products = await storeHandler.getProductById(req.query);
    return res.send(products);
})

module.exports = routes;