const initialState = {
  name: "faiq",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Haidar",
    };
  }
  return state;
};

export default globalReducer;
