export interface IState {
  user: any;
  basket: any;
}

export const initialState = {
  basket: [],
  user: null,
};

export enum actionTypes {
  ADD_TO_BASKET = "ADD_TO_BASKET",
  EMPTY_BASKET = "EMPTY_BASKET",
  REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET",
  SET_USER = "SET_USER",
}

export type IAction =
  | {
      type: actionTypes.ADD_TO_BASKET;
      item: any;
    }
  | {
      type: actionTypes.EMPTY_BASKET;
      item: any;
    }
  | {
      type: actionTypes.REMOVE_FROM_BASKET;
      id: any;
    }
  | {
      type: actionTypes.SET_USER;
      user: any;
    };

// Selector
export const getBasketTotal = (basket: any) =>
  basket?.reduce((amount: any, item: any) => item.price + amount, 0);

const reducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem: any) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
