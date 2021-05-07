import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHerosData} from '../actions/fetchHerosData';

const animatedComponents = makeAnimated();

function HerosSelector() {
  const heros_list = useSelector(state => state.herosList);
  const accountId = useSelector(state => state.accountId)
  const scope = useSelector(state => state.scope);
  const dispatch = useDispatch();

  return (
      <div>
          {scope==='heros' ?
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={heros_list}
            onChange={(value) => dispatch(fetchHerosData(accountId, value))}
          />
      : ''}
      </div>
  )
};
 
export default HerosSelector;