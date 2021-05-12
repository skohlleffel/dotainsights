import {Form, Button} from 'react-bootstrap';

import {useSelector, useDispatch} from 'react-redux';
import {set_account_id} from '../../actions/accountId';
import {fetchData} from '../../actions/fetchData';

function AccountId() {
  const account = useSelector(state => state.accountId);
  const dispatch = useDispatch();
  return (
    <Form inline>
      <Form.Control
            className="mr-sm-2"
            required
            type="text"
            placeholder="Open Dota Account ID"
            onChange={(e) => dispatch(set_account_id(e.target.value))}
        />
      <Button onClick={() => dispatch(fetchData(account))}>Get Account Data</Button>
    </Form>
  );
}

export default AccountId;