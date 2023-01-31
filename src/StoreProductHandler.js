const axios = require("axios");

class StoreProductHandler {
  #API_URL = 'https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50';

  async getProductsByName(name) {
    let products = await this.#getProductsFromAPI();
    return this.#filterByName(products, name);
  }

  async getProductById(query){
    let products = await this.#getProductsFromAPI();
    return this.#filterById(products, query.id);
  }

  async #getProductsFromAPI() {
    let resp = await axios.get(this.#API_URL);
    return resp['data']['products'];
  }

  #filterByName(products, name) {
     if (!name) {
       return products;
     }

    return products
              .filter(product =>
                product.name.toLowerCase()
                            .includes(name.toLowerCase()));
  }

  #filterById(products, id) {
    return products.filter(product => parseInt(product.id) === parseInt(id));
  }
}

module.exports = StoreProductHandler;