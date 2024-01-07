import {Link, Route, Routes} from 'react-router-dom';

import './App.css';
import Januar from './months/januar/Januar';
import StartPage from './months/StartPage';

function App() {
  return (
    <div className="App">
      <div className="navigation">
          <Link to='/' title="Hjem"><div id="hjem" className="nav-item">Hjem</div></Link>
          <Link to='/januar' title="Januar"> <div id="januar" className="nav-item">Januar</div></Link>
      </div>
      <div className="main">
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/januar' element={<Januar />} />
        </Routes>
      </div>
  </div>
  );
}

export default App;
