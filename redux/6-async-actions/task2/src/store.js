import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users.reducer';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const reducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
