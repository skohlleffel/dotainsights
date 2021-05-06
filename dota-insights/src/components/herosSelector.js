import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from 'react-redux';
import {selectHeros} from '../actions/selectHeros';

const animatedComponents = makeAnimated();

function HerosSelector() {
  const heros = useSelector(state => state.heros);
  const scope = useSelector(state => state.scope);
  const dispatch = useDispatch();

  return (
      <div>
          {heros && scope==='heros' ?
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[heros[1]]}
            isMulti
            options={heros}
            onChange={(value) => dispatch(selectHeros(value))}
          />
      : ''}
      </div>
  )
};
 
export default HerosSelector;