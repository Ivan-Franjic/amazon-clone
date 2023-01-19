import React, {
  createContext,
  useContext,
  useReducer,
  ReactElement,
} from "react";
import { initialState, IState } from "./reducer";

// Prepares the dataLayer
// export const StateContext = createContext();
const StateContext = createContext<IState | any>(initialState);

interface StateProps {
  children: ReactElement;
  initialState: IState | any;
  reducer: IState | any;
}

// Wrap our app and provide the Data layer
export const StateProvider = ({
  children,
  initialState,
  reducer,
}: StateProps): ReactElement => (
  <StateContext.Provider value={useReducer(initialState, reducer)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
