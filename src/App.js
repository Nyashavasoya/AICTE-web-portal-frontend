import './App.css';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
      </Router>
    </div>
  );
}

export default App;


