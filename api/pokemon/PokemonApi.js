import axios from 'axios';
import endpoints from './endpoints';

export default class AuthApi {
  async findByName (name) {
    return await axios.get(endpoints.findByName + `/${name}`);
  }

  async findAll (url) {
    return await axios.get(!url ? endpoints.findAll : url);
  }
}
