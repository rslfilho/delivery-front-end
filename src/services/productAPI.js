import axios from 'axios';

const baseURL = 'https://g3-deliveryapp-backend.herokuapp.com/';

const getAll = async (token) => {
  const { data: products } = await axios.get(
    `${baseURL}/products`,
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
