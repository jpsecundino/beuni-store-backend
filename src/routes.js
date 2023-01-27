const express = require('express')
const axios = require('axios')
const routes = express.Router();

routes.get('/products', async (req, res)=>{
    const products = await getProducts();
    return res.send(products);
})

async function getProducts(){
    let resp = await axios.get("https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50")
    return resp['data'];
}

module.exports = routes;