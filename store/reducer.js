const initialState = {
  files: [],
};

const updateFileList = (state, action) => {

  return {
    ...state,
    files: [
      ...state.files,
      ...action.payload,
    ],
  };
};

const updateFile = (state, action) => {
  const index = state.files.findIndex((file) => file.id === action.payload.id);
  let files = [...state.files];

  if (index > 0) {
    files[index] = action.payload;
  } else {
    files.push(action.payload);
  }

  return {
    ...state,
    files,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILES_RECEIVED':
      return updateFileList(state, action);
    case 'FILE_DETAILS_RECEIVED':
      return updateFile(state, action);
    default:
      return state;
  }
}
