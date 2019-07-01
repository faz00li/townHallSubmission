const initialState = {
  uid: null,
  displayName: null,
  email: null,
};

const selectionReducer = (state = initialState, {
  type,
  payload,
}) => {
  switch (type) {
  case 'CLEAR_USER':
    return {
      ...initialState,
    };
  case 'SET_USER':
    return {
      ...state,
      uid: payload.uid,
      displayName: payload.displayName,
      email: payload.email,
    };

  default:
    return state;
  }
};

export default selectionReducer;