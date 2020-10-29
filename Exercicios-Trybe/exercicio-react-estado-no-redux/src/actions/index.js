export const addInputToStore = (name, value) => ({
    type: 'ADD_ELEMENT',
    payload: {
      name,
      value
    }
  });
  