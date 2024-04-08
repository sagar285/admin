// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testdataapptesting.onrender.com/api/v1', // Set your API base URL
  timeout: 5000, // Set the request timeout (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any common headers if needed
  },
});

export default api;