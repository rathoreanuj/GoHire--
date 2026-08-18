import axios from 'axios';
import { ADMIN_API_BASE } from '../config/env';

const statsApi = axios.create({
  baseURL: `${ADMIN_API_BASE}/api`,
  headers: { 'Content-Type': 'application/json' },
});

export const getStats = async () => {
  const response = await statsApi.get('/stats');
  return response.data;
};

export default { getStats };
