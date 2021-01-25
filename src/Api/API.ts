const axios = require('axios');

export default axios.create({
  baseURL: 'https://reqres.in/api/'
})
