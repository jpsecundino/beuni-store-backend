const axios = require("axios");

class StoreProductHandler {
  #API_URL = 'https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50';

  async getRequestedProducts(query) {
    let products = await this.#getProductsFromAPI();
    return this.#filterProducts(products, query);
  }

  async #getProductsFromAPI() {
    let resp = await axios.get(this.#API_URL);
    return resp['data']['products'];
  }

  #filterProducts(products, query) {
     return this.#filterByName(query.name, products);
  }

  #filterByName(name, products) {
     if (!name) {
       return products;
     }

    return products.filter(product => {
      return product.name.toLowerCase().includes(name.toLowerCase());
    })
  }
}

module.exports = StoreProductHandler;