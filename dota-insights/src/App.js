import {Container, Row, Col} from 'react-bootstrap';

import AccountID from './components/AccountId';
import WinLossTimeChart from './components/winLossTimeChart';
import RangeSlider from './components/rangeSlider';
import Scope from './components/scope';
import HerosSelector from './components/herosSelector';
import HeroSpecificTimeChart from './components/heroSpecificTimeChart';
import './styles/css/app.css';

function App() {
  return (
    <Container fluid className="App">
      <Row className="justify-content-md-center">
        <Col id="AccountId" md={4} xs={4} lg={4}>
          <AccountID />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col id="RangeSlider" md={6} xs={6} lg={6}>
          <RangeSlider />
        </Col>  
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Scope />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col id="TimeChart" md={12} xs={12} lg={12}>
          <WinLossTimeChart />         
        </Col>
        <Col md={12} xs={12} lg={12}>
          <HerosSelector />         
        </Col>        
      </Row>
      <Row className="justify-content-md-center">
        <Col id="HeroCharts" md={12} xs={12} lg={12}>
          <HeroSpecificTimeChart />
        </Col>
      </Row>  
    </Container>
  );
}

export default App;
