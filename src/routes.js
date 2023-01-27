const express = require('express')

const routes = express.Router();

const products = [
  {
    id: 1,
    name: "Product X",
    description: "A beautiful product X",
    price: 33.50
  },
  {
    id: 2,
    name: "Product Y",
    description: "A beautiful product Y",
    price: 32.50
  }
];

routes.get('/products', (req, res)=>{
  return res.status(200).json(products);
})

module.exports = routes;