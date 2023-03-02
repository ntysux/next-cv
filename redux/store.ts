import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Reducer from './reducer';

const reducer = combineReducers({
  cv: Reducer
});

export type RootState = ReturnType<typeof reducer>;

export default configureStore({ reducer });