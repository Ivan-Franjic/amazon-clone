export interface IState {
  basket: any;
  user: any;
  products: any;
}

export const initialState: IState = {
  basket: [],
  user: null,
  products: [],
};

export enum actionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_TO_BASKET = "ADD_TO_BASKET",
  EMPTY_BASKET = "EMPTY_BASKET",
  REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET",
  SET_USER = "SET_USER",
}

export type IAction =
  | {
      type: actionTypes.GET_PRODUCTS;
      item: any;
    }
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
      id: string;
    }
  | {
      type: actionTypes.SET_USER;
      current_user: any;
    };

export type ContextHook = () => {
  state: IState;
  dispatch: (action: IAction) => void;
};
// Selector
export const getBasketTotal = (basket: any) =>
  basket?.reduce((amount: any, item: any) => item.price + amount, 0);

export const reducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: [state.products, action.item],
      };
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
        user: action.current_user,
      };
    default:
      return state;
  }
};

export default reducer;
