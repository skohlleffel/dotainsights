import {Navbar} from 'react-bootstrap';

import AccountId from './appNavbarComponents/AccountId';
import ToggleSideBar from './appNavbarComponents/toggleSideBar';

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <ToggleSideBar />
            <div className="mx-auto my-2 text-white">
                <h1>Dota Insights</h1>
            </div>
            <AccountId/>
        </Navbar>
    )
}
