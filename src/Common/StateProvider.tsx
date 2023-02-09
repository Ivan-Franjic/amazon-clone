import {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import { reducer, initialState, IState, IAction, ContextHook } from "./reducer";

// Prepares the dataLayer
const globalContext = createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

// Wrap our app and provide the Data layer
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

// Pull information from the data layer
export const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};
