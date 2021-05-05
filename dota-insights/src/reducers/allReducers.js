import accountIdReducer from './accountId';
import parseDataReducer from './parseData';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   accountId: accountIdReducer,
   openDotaData: parseDataReducer,
});

export default allReducers;