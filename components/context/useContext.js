import { createContext, useReducer } from 'react';

const initialState = {
  isContact: false,
  isOpen: false,
  isDesktop: false,
};
const Context = createContext();

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reducers.length; i++)
      // eslint-disable-next-line no-param-reassign
      state = reducers[i](state, action);
    return state;
  };

function Provider({ children }) {
  // eslint-disable-next-line no-use-before-define
  const [state, dispatch] = useReducer(combineReducers(reducer), initialState);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function reducer(state, action) {
  switch (action.type) {
    case 'inViewContact':
      return { ...state, isContact: action.payload };
    case 'isOpenMenu':
      return { ...state, isOpen: !state.isOpen };
    case 'isDesktop':
      return { ...state, isDesktop: action.payload, isContact: false };
    default:
      return state;
  }
}
export { Context, Provider };
