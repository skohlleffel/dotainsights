import accountIdReducer from './accountId';
import parseDataReducer from './parseData';
import gameDurationReducer from './gameDuration';
import parseHerosReducer from './parseHeros';
import scopeReducer from './scope';
import selectHerosReducer from './selectHeros';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   accountId: accountIdReducer,
   openDotaData: parseDataReducer,
   gameDuration: gameDurationReducer,
   heros: parseHerosReducer,
   scope: scopeReducer,
   selectedHeros: selectHerosReducer,
});

export default allReducers;