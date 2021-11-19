import axios from 'axios';

export default class AuthService {
  static getProfile() {
    return axios.get('/get-profile');
  }

  static login(model) {
    return axios.post('/login', model);
  }

  static registration() {
    // TODO написать сервис для регистрации как в логине
    //
  }
}
