import api from './api';
import { API_BASE } from '../config/env';

export const fileApi = {
  getResume: () => {
    return `${API_BASE}/api/files/resume`;
  },

  getProfileImage: () => {
    return `${API_BASE}/api/files/profile-image`;
  },
};

