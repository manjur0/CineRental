const initialState = {
  CartData: [],
};
const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        CartData: [...state.CartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        CartData: state.CartData.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export { cartReducer, initialState };
