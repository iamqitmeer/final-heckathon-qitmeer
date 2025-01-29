import axios from 'axios';

const API = axios.create({ baseURL: 'https://smit-final-heckathon-qitmeer-backend.vercel.app/api/guarantors' });

export const createGuarantor = (guarantorData) => API.post('/', guarantorData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
export const getGuarantors = () => API.get('/', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
