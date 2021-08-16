const axios = require('axios');
const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';

function getRestaurants() {
  return axios.get(`${BACKEND_URL}/restaurant`);
}

export { getRestaurants };