import { API_CALL } from '../utils';

export const getApiData = ({ url, type }) => async dispatch => {
  function onSuccess(data) {
		dispatch({
			type,
			payload: data
		});
		return data;
  }

  function onPending() {
		dispatch({
			type: `${type}_PENDING`,
			payload: true
		});
		return true;
  }

  onPending();
  
  try {
    const option = {
      method: 'GET',
      url: `${url}`
    };
    const res = await API_CALL(option);
    onSuccess(res);
  } catch (error) {
    const errMsg = {
      status_code: 404,
      message: 'Not found'
    };
    onSuccess(errMsg)
  }
}

export const getDetails = ({ url, id }) => async dispatch => {
  try {
    const option = {
      method: 'GET',
      url: `${url}/${id}`
    };
    const res = await API_CALL(option);
    return res;
  } catch (error) {
    const errMsg = {
      status_code: 404,
      message: 'Not found'
    };
    return errMsg;
  }
}