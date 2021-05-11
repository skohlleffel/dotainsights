import {Row, Col} from 'react-bootstrap';
import {Sidebar} from 'semantic-ui-react'
import {useSelector} from 'react-redux';

import WinLossTimeChart from './mainPageContentComponents/winLossTimeChart';
import RangeSlider from './mainPageContentComponents/rangeSlider';
import Scope from './mainPageContentComponents/scope';

export default function MainPageContent() {

    const sideBarStatus = useSelector(state => state.viewSideBar);

    return (
        <Sidebar.Pusher dimmed={sideBarStatus}>
            <Row className="justify-content-md-center">
                <Col id="RangeSlider" md={6} xs={6} lg={6}>
                    <RangeSlider />
                </Col>  
            </Row>
            <Row className="justify-content-md-center">
                <Col id="Scope">
                    <Scope />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col id="TimeChart" md={12} xs={12} lg={12}>
                    <WinLossTimeChart />   
                </Col>       
            </Row>   
        </Sidebar.Pusher>
    )
}