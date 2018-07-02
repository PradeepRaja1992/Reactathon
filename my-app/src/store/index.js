import { createStore } from 'redux';
import { combineReducers} from 'redux';
import hackDetailsReducer from '../reducers/hacDetailsReducer';

const reducers = combineReducers({hackDetailsReducer});

const store = createStore(reducers);

export default store;
