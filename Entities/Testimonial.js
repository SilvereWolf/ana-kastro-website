// Lightweight Testimonial entity wrapper using fetch
const API_BASE = (process.env.REACT_APP_API_BASE || '').replace(/\/$/, '') || '/.netlify/functions';
const TESTIMONIALS_ENDPOINT = API_BASE ? `${API_BASE}/testimonials` : '/api/testimonials';

export const Testimonial = {
  // list(sort, limit)
  async list(sort = '-rating', limit = 10) {
    const url = new URL(TESTIMONIALS_ENDPOINT, window.location.origin);
    if (sort) url.searchParams.set('sort', sort);
    if (limit) url.searchParams.set('limit', limit);
    const res = await fetch(url.toString());
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Failed to load testimonials: ${res.status} ${txt}`);
    }
    return res.json();
  }
};
