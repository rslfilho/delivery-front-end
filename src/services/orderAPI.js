import axios from 'axios';

const URL = 'https://g3-deliveryapp-backend.herokuapp.com/';

const getAll = async (token) => {
  const { data } = await axios.get(
    `${URL}sales`,
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return data;
};

const post = async (sale, token) => {
  const { data } = await axios.post(
    `${URL}sales`,
    { ...sale },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return data;
};

export default {
  getAll,
  post,
};
