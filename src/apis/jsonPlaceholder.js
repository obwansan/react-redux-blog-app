import axios from 'axios';

// Specify the base url so don't have to do it every time we make a request.
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});