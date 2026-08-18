const normalizeUrl = (value) => value.trim().replace(/\/+$/, '');

export const API_BASE = normalizeUrl(import.meta.env.VITE_API_BASE || '');

if (!API_BASE) {
  console.warn('VITE_API_BASE is not set. Configure it in your environment.');
}
