import { configureStore, isPlainObject } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default configureStore({
  reducer: rootReducer,
  // middleware: applyMiddleware(thunk),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: [thunk, logger],
});
