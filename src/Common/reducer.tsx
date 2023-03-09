import { IBasketProductData } from "../Types/BasketProduct.type";

const getLocalBasketData = () => {
  let localBasketData = localStorage.getItem("basket");
  if (localBasketData) {
    return JSON.parse(localBasketData);
  } else {
    return [];
  }
};

export interface IState {
  user: any;
  basket: any;
  products: any;
  productDetails: any;
  relatedProducts: any;
  productReviews: any;
  addresses: any;
  addressDetails: any;
  orders: any;
}

export const initialState: IState = {
  user: null,
  basket: getLocalBasketData(),
  products: [],
  productDetails: [],
  relatedProducts: [],
  productReviews: [],
  addresses: [],
  addressDetails: [],
  orders: [],
};

export enum actionTypes {
  SET_USER = "SET_USER",
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS",
  GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS",
  GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS",
  GET_ADDRESSES = "GET_ADDRESSES",
  GET_ADDRESS_DETAILS = "GET_ADDRESS_DETAILS",
  ADD_TO_BASKET = "ADD_TO_BASKET",
  SET_INCREASE = "SET_INCREASE",
  SET_DECREASE = "SET_DECREASE",
  EMPTY_BASKET = "EMPTY_BASKET",
  REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET",
  GET_ORDERS = "GET_ORDERS",
}

export type IAction =
  | {
      type: actionTypes.SET_USER;
      current_user: any;
    }
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
      type: actionTypes.GET_PRODUCT_REVIEWS;
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
      item: IBasketProductData;
    }
  | {
      type: actionTypes.SET_INCREASE;
      id: string;
    }
  | {
      type: actionTypes.SET_DECREASE;
      id: string;
    }
  | {
      type: actionTypes.EMPTY_BASKET;
    }
  | {
      type: actionTypes.REMOVE_FROM_BASKET;
      id: string;
    }
  | {
      type: actionTypes.GET_ORDERS;
      item: any;
    };

export type ContextHook = () => {
  state: IState;
  dispatch: (action: IAction) => void;
};

export const getBasketTotal = (basket: Array<number>) =>
  basket?.reduce(
    (amount: number, item: any) => item.price * item.amount + amount,
    0
  );

export const reducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.current_user,
      };
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
    case actionTypes.GET_PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: [state.productReviews, action.item],
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
      let {
        id,
        amount,
        name,
        image,
        price,
        rating,
        description,
        category,
        max_quantity,
      } = action.item;
      let existingProduct = state.basket.find(
        (curItem: IBasketProductData) => curItem.id === id
      );
      if (existingProduct) {
        let updatedProduct = state.basket.map((curElem: IBasketProductData) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
            name = curElem.name;
            image = curElem.image;
            price = curElem.price;
            rating = curElem.rating;
            description = curElem.description;
            category = curElem.category;
            max_quantity = curElem.max_quantity;
            if (newAmount >= curElem.max_quantity) {
              newAmount = curElem.max_quantity;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, basket: updatedProduct };
      } else {
        let basketProduct = {
          id: id,
          name: name,
          image: image,
          price: price,
          rating: rating,
          description: description,
          category: category,
          amount: amount,
          max_quantity: max_quantity,
        };
        return {
          ...state,
          basket: [...state.basket, basketProduct],
        };
      }
    case actionTypes.SET_INCREASE:
      let updatedProduct = state.basket.map((curElem: IBasketProductData) => {
        if (curElem.id === action.id) {
          let incAmount = curElem.amount + 1;
          if (incAmount >= curElem.max_quantity) {
            incAmount = curElem.max_quantity;
          }
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, basket: updatedProduct };
    case actionTypes.SET_DECREASE:
      let updatedProduct2 = state.basket.map((curElem: IBasketProductData) => {
        if (curElem.id === action.id) {
          let decAmount = curElem.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, basket: updatedProduct2 };
    case actionTypes.EMPTY_BASKET:
      localStorage.clear();
      return {
        ...state,
        basket: [],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem: IBasketProductData) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.GET_ORDERS:
      return {
        ...state,
        orders: [state.orders, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
