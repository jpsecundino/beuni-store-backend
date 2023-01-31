# Backend server for a product list application
This application was for BeUni admission process.
It calls another API to get the products, pre-process them and exposes it though a REST API.
See the available endpoints below.

## How to run
Just go to the main folder and run

```npm run dev port=PORTNUMBER```

It is optional to give the PORTNUMBER. 

## Server endpoints

### Get all products

```http://localhost:4000/products```

### Get products which name contains a string

```http://localhost:4000/products?name=STRING```


### Get product by ID

```http://localhost:4000/product?id=ID```