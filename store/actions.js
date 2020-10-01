export const getFiles = (offset = 0) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://interview-api.snackable.ai/api/file/all?offset=${offset}`);
      const data = await response.json();

      dispatch({ type: 'FILES_RECEIVED', payload: data });

      return data;
    } catch {
      // handle error
    }
  };
};

export const getFileDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://interview-api.snackable.ai/api/file/details/${id}`);
      const data = await response.json();

      dispatch({ type: 'FILE_DETAILS_RECEIVED', payload: data });
    } catch {
      // handle error
    }
  };
};
