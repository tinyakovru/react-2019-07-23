import {
  ADD_TO_CART,
  ADD_COMM,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
  SUBTRACT_FROM_CART
} from "./constants";

export const increase = () => ({
  type: INCREMENT
});

export const decrease = () => ({
  type: DECREMENT
});

export const addDishToCart = id => ({
  type: ADD_TO_CART,
  payload: {
    id
  }
});

export const subtractDishFromCart = id => ({
  type: SUBTRACT_FROM_CART,
  payload: {
    id
  }
});

export const deleteDishFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id
  }
});

export const addComm = (restaurantId, user, comm) => ({
  type: ADD_COMM,
  payload: {
    rest: restaurantId,
    user: user,
    comm: comm
  }
});
