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
import InstituteForm from './pages/MoreInstituteDetails';
import SubSectionForm from './pages/subsectionModel';
import OrganisationDetailsForm from './pages/organizationDetails';
import QuestionnaireForm from './pages/questionnaire2';
import ProgramDetailsForm from './pages/programDetails';
import CourseDetailsForm from './pages/courseDetails';
import MoreLandInformationForm from './pages/moreLandDetails';
import BuildingDetailsForm from './pages/buildingDetails';
import BuildingDetailsMoreDetailsForm from './pages/moreBuildingDetials';
import LaboratoryDetailsForm from './pages/laboratoryDetails';
import AdministrativeAreaForm from './pages/administrativeArea';
import AmenitiesAreaForm from './pages/amenititesArea';
import CirculationAreaForm from './pages/circulationArea';
import InstructionalAreaForm from './pages/instructionalArea';
import InfrastructuralAreaForm from './pages/infrastructuralArea';
import HostelFacilitiesForm from './pages/hostelAmenitites';
import ComputationalFacilitiesForm from './pages/computationalFacilities';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import TextSlider from './components/TextSlider';
import AboutUs from './AboutUs';
import Services from './Services';


function LandingPage() {

  return (
    <div className="App">
      <Header />
      <div className="relative mt-20">
        <Slideshow />
        <TextSlider />
        <AboutUs />
        <Services />
      </div>
      <div style={{ backgroundColor: '#f1efed' }} className="w-full h-screen"></div>
    </div>
  );
}



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
        <Route path="/" element={isLoggedIn ? <Layout /> : <LandingPage />} />
        {!isLoggedIn && (
          <>
            <Route path="homePage" element={<HomePage />} />
            <Route path="loginPage" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="registerPage" element={<Registration />} />
            <Route path="payment-process" element={<PaymentProcess />} />
          </>
        )}

        {isLoggedIn && (
          <>
          <Route path="/" element={<Layout />} >
            <Route index={true} element={<Dashboard />} />
            <Route path="institute-details" element={<InstituteDetails />} />
            <Route path="contact-person-details" element={<ContactPersonForm />} />
            <Route path="trustee-details" element={<TrusteeDetailsForm />} />
            <Route path="land-details" element={<LandDetailsForm />} />
            <Route path="my-documents" element={<MyDocs />} />
            <Route path="payment" element={<Payments />} />
            <Route path="progress-tracker" element={<ProgressTracker />} />
            <Route path="notice" element={<Notice />} />
            <Route path="calender" element={<Calender />} />
            <Route path="logout" element={<Logout onLogout={handleLogout} />} />
          </Route>
            <Route path="/chatbot" element={<ChatBot />} >
            </Route>
            <Route path="/chatbot" element={<ChatBot />} ></Route>
            <Route path="/application-process" element={<ApplicationProcess />} >
              <Route path="institute-details" element={<InstituteDetails />}/>
              <Route path="more-institute-details" element={<InstituteForm />}/>
              <Route path="subsection" element={<SubSectionForm />}/>
              <Route path="organisation-details" element={<OrganisationDetailsForm />}/>
              <Route path="trustee-details" element={<TrusteeDetailsForm />}/>
              <Route path="contact-person-details" element={<ContactPersonForm />}/>
              <Route path="questionnaire" element={<QuestionnaireForm />}/>
              <Route path="program-details" element={<ProgramDetailsForm />}/>
              <Route path="course-details" element={<CourseDetailsForm />}/>
              <Route path="land-details" element={<LandDetailsForm />}/>
              <Route path="more-land-details" element={<MoreLandInformationForm />}/>
              <Route path="building-details" element={<BuildingDetailsForm />}/>
              <Route path="more-building-details" element={<BuildingDetailsMoreDetailsForm />}/>
              <Route path="laboratory-details" element={<LaboratoryDetailsForm />}/>
              <Route path="administrativeArea-details" element={<AdministrativeAreaForm />}/>
              <Route path="amenititesArea-details" element={<AmenitiesAreaForm />}/>
              <Route path="circulationArea-details" element={<CirculationAreaForm />}/>
              <Route path="instructionalArea-details" element={<InstructionalAreaForm />}/>
              <Route path="infrastructuralArea-details" element={<InfrastructuralAreaForm />}/>
              <Route path="hostelfacilities-details" element={<HostelFacilitiesForm />}/>
              <Route path="computationalfacilities-details" element={<ComputationalFacilitiesForm />}/>
              </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
