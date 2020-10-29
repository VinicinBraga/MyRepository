import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formStoreReducer from '../reducers';

const rootReducer = combineReducers({ formStoreReducer })

const store = createStore(rootReducer, composeWithDevTools());

export default store;
