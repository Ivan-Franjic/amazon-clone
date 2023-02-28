export interface IState {
  basket: any;
  user: any;
  products: any;
  productDetails: any;
  relatedProducts: any;
  addresses: any;
  addressDetails: any;
}

export const initialState: IState = {
  basket: [],
  user: null,
  products: [],
  productDetails: [],
  relatedProducts: [],
  addresses: [],
  addressDetails: [],
};

export enum actionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS",
  GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS",
  GET_ADDRESSES = "GET_ADDRESSES",
  GET_ADDRESS_DETAILS = "GET_ADDRESS_DETAILS",
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
      type: actionTypes.GET_PRODUCT_DETAILS;
      item: any;
    }
  | {
      type: actionTypes.GET_RELATED_PRODUCTS;
      item: any;
    }
  | {
      type: actionTypes.GET_ADDRESSES;
      item: any;
    }
  | {
      type: actionTypes.GET_ADDRESS_DETAILS;
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
    case actionTypes.GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.item,
      };
    case actionTypes.GET_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: [state.relatedProducts, action.item],
      };
    case actionTypes.GET_ADDRESSES:
      return {
        ...state,
        addresses: [state.addresses, action.item],
      };
    case actionTypes.GET_ADDRESS_DETAILS:
      return {
        ...state,
        addressDetails: action.item,
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
