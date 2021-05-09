import accountIdReducer from './accountId';
import parseMatchDataReducer from './parseMatchData';
import gameDurationReducer from './gameDuration';
import getHeroMatchDataReducer from './getHeroMatchData';
import scopeReducer from './scope';
import parseHeroListReducer from './parseHeroList';
import lastMatchIdReducer from './getLastMatchId';
import heroJpegReducer from './heroJpeg';
import parseLastMatchDataReducer from './parseLastMatchData'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   accountId: accountIdReducer,
   openDotaData: parseMatchDataReducer,
   gameDuration: gameDurationReducer,
   heroData: getHeroMatchDataReducer,
   scope: scopeReducer,
   herosList: parseHeroListReducer,
   heroJpeg: heroJpegReducer,
   lastMatchId: lastMatchIdReducer,
   lastMatchData: parseLastMatchDataReducer,
});

export default allReducers;