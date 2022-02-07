import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const getAll = async (token) => {
  const { data: products } = await axios.get(
    `${baseURL}products`,
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return products;
};

export default {
  getAll,
};
