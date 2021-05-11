import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from 'react-redux';
import {getHeroMatchData} from '../../actions/match_time/getHeroMatchData';

const animatedComponents = makeAnimated();

function HerosSelector() {
  const heros_list = useSelector(state => state.herosList);
  const matchData = useSelector(state => state.openDotaData);
  const scope = useSelector(state => state.scope);
  const dispatch = useDispatch();

  return (
      <div>
          {scope==='match_time' && matchData ?
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={heros_list}
            onChange={(value) => dispatch(getHeroMatchData(matchData, value))}
            maxMenuHeight={800}
          />
      : ''}
      </div>
  )
};
 
export default HerosSelector;