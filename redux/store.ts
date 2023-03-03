import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainReducer from './reducer';
import branchReducer from './reducer.branch';

const reducer = combineReducers({
  cv: mainReducer,
  section: branchReducer
});

export type RootState = ReturnType<typeof reducer>;

export default configureStore({ reducer });