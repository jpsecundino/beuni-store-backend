const express = require('express')
const StoreProductHandler = require('./StoreProductHandler')
const axios = require('axios')
const routes = express.Router();

routes.get('/products', async (req, res)=>{
    let storeHandler = new StoreProductHandler;
    const products = await storeHandler.getRequestedProducts(req.query);
    return res.send(products);
})

module.exports = routes;