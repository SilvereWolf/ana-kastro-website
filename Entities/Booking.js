// Lightweight Booking entity wrapper using fetch
// Usage: Booking.create(data)
// Configure API base with environment variable REACT_APP_API_BASE

const API_BASE = (process.env.REACT_APP_API_BASE || '').replace(/\/$/, '') || '/.netlify/functions';
const BOOKINGS_ENDPOINT = API_BASE ? `${API_BASE}/bookings` : '/api/bookings';

export const Booking = {
  async create(data) {
    if (!data) throw new Error('No booking data provided');
    const res = await fetch(BOOKINGS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Booking create failed: ${res.status} ${text}`);
    }
    return res.json();
  }
};
