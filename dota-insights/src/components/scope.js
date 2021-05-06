import {DropdownButton, Dropdown} from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux';
import {selectOverall} from '../actions/selectScope';
import {fetchHerosData} from '../actions/fetchHerosData';

function Scope() {
  const data = useSelector(state => state.openDotaData);
  const dispatch = useDispatch();
  return (
      <div>
          {data ? 
            <DropdownButton id="dropdown-item-button" title="Toggle Results View">
                <Dropdown.Item onClick={() => dispatch(selectOverall())} as="button">Overall</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(fetchHerosData())} as="button">Per Hero</Dropdown.Item>
            </DropdownButton> 
          : ''}
        
      </div>
    
  );
}

export default Scope;