const express = require('express')
const StoreProductHandler = require('./StoreProductHandler')
const routes = express.Router();

const storeHandler = new StoreProductHandler();
routes.get('/products', async (req, res)=>{
    console.log("New request to products: NAME = " + req.query.name)
    const products = await storeHandler.getProductsByName(req.query.name);
    return res.send(products);
})

routes.get('/product', async (req, res)=>{
    console.log("New request to products: ID = " + req.query.id)
    const products = await storeHandler.getProductById(req.query);
    return res.send(products);
})

module.exports = routes;