import {Form, Button} from 'react-bootstrap';

import {useSelector, useDispatch} from 'react-redux';
import {set_account_id} from '../actions/accountId';
import {fetchData} from '../actions/fetchData';

function AccountId() {
  const account = useSelector(state => state.accountId);
  const dispatch = useDispatch();
  return (
    <div>
        <Form.Control
            required
            type="text"
            placeholder="Open Dota Account ID"
            onChange={(e) => dispatch(set_account_id(e.target.value))}
        />
        <Button onClick={() => dispatch(fetchData(account))}>Get Account Data</Button>
    </div>
  );
}

export default AccountId;