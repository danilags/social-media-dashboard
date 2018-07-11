import axios from 'axios';
import { API_BASE_URL } from '../constants';

/*
  option should be
  {
    url: 'url',
    method: 'get'/'post'/'put',
    data: {}
  }
*/

const API_CALL = async option => {
  try {
    const API_OPTION = {
      baseURL: API_BASE_URL,
      ...option,
    };

    const res = await axios.request(API_OPTION);
    return Promise.resolve(res);
  } catch ({ response }) {
    throw new Error(response);
  }
};

export { API_CALL };
