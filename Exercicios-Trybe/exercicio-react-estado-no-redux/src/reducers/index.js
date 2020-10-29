const INITIAL_STATE = {};

function formStoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

export default formStoreReducer;