import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LoginPanel from './components/LoginPanel';
import ActivateAcccount from './components/ActivateAcccount';
import ForgotPassword from './components/ForgotPassword';
import NewUser from './components/NewUser';
import RegistrationForm from './components/RegistrationForm';
import withSpinner from './withSpinner';
import RegistrationComplete from './components/RegistrationComplete';
import UserLayout from './components/user/UserLayout';
import ApplicationList from "./components/user/ApplicationList";
import ChangePassword from './components/ChangePassword';
import Footer from './components/Footer';
import NotFound from './components/NotFound-404';
import "./customStyles/buttonAnimation.css";
import "./customStyles/fontStyles.css"
import "./customStyles/captchaStyles.css";

const HomeWithSpinner = withSpinner(Home);
const LoginPanelWithSpinner = withSpinner(LoginPanel);
const ActivateAcccountWithSpinner = withSpinner(ActivateAcccount);
const ForgotPasswordWithSpinner = withSpinner(ForgotPassword);
const NewUserWithSpinner = withSpinner(NewUser);
const RegistrationFormWithSpinner = withSpinner(RegistrationForm);
const RegistrationCompleteWithSpinner = withSpinner(RegistrationComplete);
const ChangePasswordWithSpinner = withSpinner(ChangePassword);
const ApplicationListWithSpinner = withSpinner(ApplicationList);
const NotFoundWithSpinner = withSpinner(NotFound);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeWithSpinner />} />
          <Route path="/login" element={<LoginPanelWithSpinner />} />
          <Route path="/activate-account" element={<ActivateAcccountWithSpinner />} />
          <Route path="/forgot-password" element={<ForgotPasswordWithSpinner />} />
          <Route path="/change-password" element={<ChangePasswordWithSpinner />} />
          <Route path="/new-user" element={<NewUserWithSpinner />} />
          <Route path="/registration-page" element={<RegistrationFormWithSpinner />} />
          <Route path="/registration-complete/:name/:email" element={<RegistrationCompleteWithSpinner />} />
          <Route path="/user/applicationlist" element={<ApplicationListWithSpinner />} />
          <Route path="/user" element={<UserLayout/>} />
          <Route path="/*" element={<UserLayout/>} />
          <Route path="/404" element={<NotFoundWithSpinner />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
