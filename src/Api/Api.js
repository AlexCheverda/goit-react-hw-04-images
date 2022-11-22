import axios from 'axios';

const API_KEY = '30141721-d76c6397e8bd997ef3ff6c661';
const BASE_URL = `https://pixabay.com/api/`;

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  
  return response.data;
};