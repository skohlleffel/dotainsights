import {Container} from 'react-bootstrap';
import AppNavbar from './components/appNavbar';
import MatchTimeSidebar from './components/matchTimeSidebar';

import './styles/css/app.css';
import './index.css';

function App() {
  return (
    <Container fluid className="App" style={{paddingLeft: "0px", paddingRight: "0px"}}>
      <AppNavbar />
      <MatchTimeSidebar />        
    </Container>
    
  );
}

export default App;
