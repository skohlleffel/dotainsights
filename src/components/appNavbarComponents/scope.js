import {Button} from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux';
import {selectLastMatch} from '../../actions/last_match/selectLastMatch';
import {selectMatchTime} from '../../actions/match_time/selectMatchTime';

function Scope() {
  const data = useSelector(state => state.openDotaData);
  const lastMatchId = useSelector(state => state.lastMatchId);
  const scope = useSelector(state => state.scope);
  const dispatch = useDispatch();
  return (
      <div>
          {data && scope === "last_match" ? 
          <Button size="lg" variant="dark" onClick={() => dispatch(selectMatchTime())}>
              Toggle Match Time
          </Button>
          : data && scope === "match_time" ?
          <Button  size="lg" variant="dark" onClick={() => dispatch(selectLastMatch(lastMatchId))}>
              Toggle Last Match
          </Button>
          :
          <Button  size="lg" variant="dark" disabled={true}>
              Toggle Last Match
          </Button>
          }
      </div>
    
  );
}

export default Scope;