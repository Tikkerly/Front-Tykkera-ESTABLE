import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

// A continuación, define tus reductores y acciones

const reducer = (state, action) => {
 switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
 }
};

const initState = {
 // Aquí va tu estado inicial
};

const makeStore = () => configureStore({ reducer, preloadedState: initState });
const wrapper = createWrapper(makeStore);

export default wrapper;