import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

export const API_URL = 'https://task-manager-24193fc2d-bhairavisomannavar13-6047s-projects.vercel.app';
