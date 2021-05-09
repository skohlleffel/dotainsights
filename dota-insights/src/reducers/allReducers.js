import accountIdReducer from './accountId';
import parseMatchDataReducer from './parseMatchData';
import gameDurationReducer from './gameDuration';
import getHeroMatchDataReducer from './getHeroMatchData';
import scopeReducer from './scope';
import selectHerosReducer from './selectHeros';
import parseHeroListReducer from './parseHeroList';
import heroJpegReducer from './heroJpeg';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   accountId: accountIdReducer,
   openDotaData: parseMatchDataReducer,
   gameDuration: gameDurationReducer,
   heroData: getHeroMatchDataReducer,
   scope: scopeReducer,
   selectedHeros: selectHerosReducer,
   herosList: parseHeroListReducer,
   heroJpeg: heroJpegReducer
});

export default allReducers;