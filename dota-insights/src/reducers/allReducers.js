import accountIdReducer from './accountId';
import parseMatchDataReducer from './match_time/parseMatchData';
import gameDurationReducer from './match_time/gameDuration';
import getHeroMatchDataReducer from './match_time/getHeroMatchData';
import scopeReducer from './scope';
import parseHeroListReducer from './match_time/parseHeroList';
import lastMatchIdReducer from './last_match/getLastMatchId';
import heroJpegReducer from './match_time/heroJpeg';
import parseLastMatchDataReducer from './last_match/parseLastMatchData';
import viewSideBarReducer from './viewSideBar';
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
   viewSideBar: viewSideBarReducer
});

export default allReducers;