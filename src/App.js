import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout/Layout';
import ApplicationProcess from './components/ApplicationProcess';
import ChatBot from './components/ChatBot';
import MyDocs from './components/MyDocs';
import Payments from './components/Payments';
import ProgressTracker from './components/ProgressTracker';
import Notice from './components/Notice';
import Calender from './components/Calender';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="application-process" element={<ApplicationProcess />} />
          <Route path="chatbot" element={<ChatBot />} />      
          <Route path="my-documents" element={<MyDocs />} />
          <Route path="payment" element={<Payments />}/>
          <Route path="progress-tracker" element={<ProgressTracker />}/>
          <Route path="notice" element={<Notice />}/>
          <Route path="calender" element={<Calender />}/>
          <Route path="logout" element={<Logout />}/>
          <Route path="login" element={<div>this is login Page</div>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
