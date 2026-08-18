const normalizeUrl = (value) => value.trim().replace(/\/+$/, '');

export const API_BASE = normalizeUrl(import.meta.env.VITE_API_BASE || '');
export const ADMIN_API_BASE = normalizeUrl(import.meta.env.VITE_ADMIN_API_BASE || '');
export const RECRUITER_APP_URL = normalizeUrl(import.meta.env.VITE_RECRUITER_APP_URL || '');

if (!API_BASE) {
  console.warn('VITE_API_BASE is not set. Configure it in your environment.');
}

if (!ADMIN_API_BASE) {
  console.warn('VITE_ADMIN_API_BASE is not set. Configure it in your environment.');
}

if (!RECRUITER_APP_URL) {
  console.warn('VITE_RECRUITER_APP_URL is not set. Configure it in your environment.');
}
