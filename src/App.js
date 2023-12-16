import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
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
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registraton';
import HomePage from './pages/HomePage';
import InstituteDetails from './pages/InstituteDetails';
import { useState } from 'react';
import PaymentProcess from './pages/PaymentProcess';
import ContactPersonForm from './pages/contactPersonDetails';
import TrusteeDetailsForm from './pages/trusteeDetails';
import LandDetailsForm from './pages/LandDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Layout /> : <HomePage />} />
        {!isLoggedIn && (
          <>
            <Route path="loginPage" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="registerPage" element={<Registration />} />
            <Route path="payment-process" element={<PaymentProcess />} />
          </>
        )}

        {isLoggedIn && (
          <>
          <Route path="/" element={<Layout />} >
            <Route index={true} element={<Dashboard />} />
            <Route path="application-process" element={<ApplicationProcess />} />
            <Route path="institute-details" element={<InstituteDetails />} />
            <Route path="contact-person-details" element={<ContactPersonForm />} />
            <Route path="trustee-details" element={<TrusteeDetailsForm />} />
            <Route path="land-details" element={<LandDetailsForm />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="my-documents" element={<MyDocs />} />
            <Route path="payment" element={<Payments />} />
            <Route path="progress-tracker" element={<ProgressTracker />} />
            <Route path="notice" element={<Notice />} />
            <Route path="calender" element={<Calender />} />
            <Route path="logout" element={<Logout onLogout={handleLogout} />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
