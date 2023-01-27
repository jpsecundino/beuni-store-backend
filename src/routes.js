const express = require('express')
const axios = require('axios')
const routes = express.Router();

routes.get('/products', async (req, res)=>{
    const products = await getProducts();
    const filteredProducts = filterProducts(products, req.query);
    return res.send(filteredProducts);
})

async function getProducts(){
    let resp = await axios.get("https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50")
    return resp['data']['products'];
}

function filterProducts(products, query) {
    return filterByName(query.name, products);
}

function filterByName(name, products) {
    if (!name) {
        return products;
    }

    return products.filter(product => {
        return product.name.toLowerCase().startsWith(name.toLowerCase());
    })
}

module.exports = routes;