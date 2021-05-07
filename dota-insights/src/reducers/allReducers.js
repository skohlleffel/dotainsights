import accountIdReducer from './accountId';
import parseDataReducer from './parseData';
import gameDurationReducer from './gameDuration';
import parseHerosReducer from './parseHeros';
import scopeReducer from './scope';
import selectHerosReducer from './selectHeros';
import herosListReducer from './getHerosList'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   accountId: accountIdReducer,
   openDotaData: parseDataReducer,
   gameDuration: gameDurationReducer,
   herosData: parseHerosReducer,
   scope: scopeReducer,
   selectedHeros: selectHerosReducer,
   herosList: herosListReducer,
});

export default allReducers;