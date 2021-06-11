export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, dispatch) => {
  switch (dispatch.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, dispatch.item],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        basketItem => basketItem.id === dispatch.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${dispatch.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
