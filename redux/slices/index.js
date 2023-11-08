import miSliceReducer from './slices/miSlice';
import authReducer from './authSlices/auth';

const reducer = {
  miSlice: miSliceReducer,
  auth: authReducer,
};

const initState = {
  // Aquí va tu estado inicial
};

const makeStore = () => configureStore({ reducer, preloadedState: initState });
const wrapper = createWrapper(makeStore);

export default wrapper;