import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Homebar from './components/Homebar';
import LoginPanel from './components/LoginPanel';
import ActivateAcccount from './components/ActivateAcccount';
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/Footer';
import NewUser from './components/NewUser';
import RegistrationForm from './components/RegistrationForm';
import withSpinner from './withSpinner';
import RegistrationComplete from './components/RegistrationComplete';

const HomeWithSpinner = withSpinner(Home);
const LoginPanelWithSpinner = withSpinner(LoginPanel);
const ActivateAcccountWithSpinner = withSpinner(ActivateAcccount);
const ForgotPasswordWithSpinner = withSpinner(ForgotPassword);
const NewUserWithSpinner = withSpinner(NewUser);
const RegistrationFormWithSpinner = withSpinner(RegistrationForm);
const RegistrationCompleteWithSpinner = withSpinner(RegistrationComplete);

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Homebar />
        <Routes>
          <Route path="/" element={<HomeWithSpinner />} />
          <Route path="/login" element={<LoginPanelWithSpinner />} />
          <Route path="/activate-account" element={<ActivateAcccountWithSpinner />} />
          <Route path="/forgot-password" element={<ForgotPasswordWithSpinner />} />
          <Route path="/new-user" element={<NewUserWithSpinner />} />
          <Route path="/registration-page" element={<RegistrationFormWithSpinner />} />
          <Route path="/registration-complete" element={<RegistrationCompleteWithSpinner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
