import axios from 'axios';

/**
 * @service instância do axios configurada com BASE_URL e params padrão entre todas requests
 */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;
