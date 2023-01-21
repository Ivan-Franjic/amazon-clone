import React, {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useReducer,
  ReactElement,
} from "react";
import { reducer, initialState, IState, IAction, ContextHook } from "./reducer";

// Prepares the dataLayer
// export const StateContext = createContext();
//const StateContext = createContext<IState | any>(initialState);
const globalContext = createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});
// interface StateProps {
//   children: ReactElement;
//   initialState: IState | any;
//   reducer: IState | any;
// }
export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

// Wrap our app and provide the Data layer
// export const StateProvider = ({
//   children,
//   initialState,
//   reducer,
// }: StateProps): ReactElement => {
//   return (
//     <StateContext.Provider value={useReducer(initialState, reducer)}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);
export const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};
