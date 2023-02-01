const axios = require("axios");
const removeAccents = require('remove-accents')
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

     const nameWithoutDiacritics = removeAccents(name);

    return products
              .filter(product => {
                const productNameWithoutDiacritics = removeAccents(product.name);
                return productNameWithoutDiacritics.toLowerCase()
                    .includes(nameWithoutDiacritics.toLowerCase())
              });
  }

  #filterById(products, id) {
    return products.filter(product => parseInt(product.id) === parseInt(id));
  }
}

module.exports = StoreProductHandler;