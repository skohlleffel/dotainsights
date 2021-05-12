import {Menu, Segment, Sidebar} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux';
import '../styles/css/app.css';

import HerosSelector from './matchTimeSidebarComponents/herosSelector';
import MainPageContent from './mainPageContent';
import {viewSideBar} from '../actions/viewSideBar';

export default function MatchTimeSidebar() {

  const sideBarStatus = useSelector(state => state.viewSideBar);
  const dispatch = useDispatch();
  

  return (
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            onHide={() => dispatch(viewSideBar(false))}
            visible={sideBarStatus}
            width='wide'
          > 
            <Menu.Header id="SelectorHeader">
              <h2 id="SelecterExplanation"><u>Select Heros to see their stats</u></h2>
            </Menu.Header>
            <Menu.Header id="Selector">
              <HerosSelector /> 
            </Menu.Header>
          </Sidebar>
          <MainPageContent />
        </Sidebar.Pushable>
  )
}