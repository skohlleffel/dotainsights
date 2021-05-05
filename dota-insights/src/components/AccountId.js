import {Form, Button} from 'react-bootstrap';

import {useSelector, useDispatch} from 'react-redux';
import {set_account_id} from '../actions/accountId';
import {fetchData} from '../actions/fetchData';

function AccountId() {
  const account = useSelector(state => state.accountId);
  const data = useSelector(state => state.openDotaData);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{data.total_kills}</h1>
      <h1>{data.total_deaths}</h1>
        <Form.Control
            required
            type="text"
            placeholder="Open Dota Account ID"
            defaultValue={account}
            onChange={(e) => dispatch(set_account_id(e.target.value))}
        />
        <Button onClick={() => dispatch(fetchData(account))}>Get Account Data</Button>
    </div>
  );
}

export default AccountId;