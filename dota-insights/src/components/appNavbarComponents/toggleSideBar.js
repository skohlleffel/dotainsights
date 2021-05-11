import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {viewSideBar} from '../../actions/viewSideBar';

export default function ToggleSideBar() {
    const sideBarStatus = useSelector(state => state.viewSideBar);
    const matchData = useSelector(state => state.openDotaData);
    const dispatch = useDispatch();
    return (
        <div>
            {matchData ? 
            <Button onClick={() => dispatch(viewSideBar(!sideBarStatus))}>
                Select Heros
            </Button>
            :
            <Button disabled={true}>
                Select Heros
            </Button>
            }
        </div>
    )
}