import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
export default class AuthApi {
  async findByName (name) {
    return await axios.get(`${baseUrl}/${name}`);
  }
  async findAll (url) {
    return await axios.get(url || baseUrl);
  }
}
