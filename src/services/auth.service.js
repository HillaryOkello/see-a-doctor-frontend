import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

const register = (name, password) => axios.post(`${API_URL}/users`, {
  name,
  password,
})
  .then((response) => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  });

const login = (name, password) => axios
  .post(`${API_URL}/login`, {
    name,
    password,
  })
  .then((response) => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
