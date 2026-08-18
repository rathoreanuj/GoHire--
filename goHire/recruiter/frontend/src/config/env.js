export const API_BASE = (import.meta.env.VITE_API_BASE || '').trim();

if (!API_BASE) {
  console.warn('VITE_API_BASE is not set. Configure it in your environment.');
}
