import { createContext, useReducer } from 'react';

const initialState = {
  isContact: false,
  isOpen: false,
};
const Context = createContext();

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
  };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(reducer), initialState);
  const value = { state, dispatch };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>;
    </>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case 'inViewContact':
      return { ...state, isContact: action.payload };
    case 'outViewContact':
      return { ...state, isContact: action.payload };
    case 'isOpenMenu':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
export { Context, Provider };
