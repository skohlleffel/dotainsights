import {DropdownButton, Dropdown} from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux';
import {selectLastMatch} from '../actions/selectLastMatch';
import {selectMatchTime} from '../actions/selectMatchTime';

function Scope() {
  const data = useSelector(state => state.openDotaData);
  const lastMatchId = useSelector(state => state.lastMatchId)
  const dispatch = useDispatch();
  return (
      <div>
          {data ? 
            <DropdownButton id="dropdown-item-button" title="Toggle Results View">
                <Dropdown.Item onClick={() => dispatch(selectMatchTime())} as="button">Match Time</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(selectLastMatch(lastMatchId))} as="button">Last Match</Dropdown.Item>
            </DropdownButton> 
          : ''}
        
      </div>
    
  );
}

export default Scope;