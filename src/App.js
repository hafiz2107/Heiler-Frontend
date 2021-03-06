
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Signup from './Screen/Common/Signup/Signup';
import LoginScreen from './Screen/Common/Login/Login';
import OtpInput from './Screen/Common/OtpScreen/OtpInput';
import Store from './Redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginScreen person='user'/>} />
          <Route path="/signup" element={<Signup person='user'/>} />
          <Route path='/otp' element={<OtpInput person='user'/>} />

          <Route path='/doctor' element={<LoginScreen person='doctor'/>} />
          <Route path="/doctorsignup" element={<Signup person='doctor'/>} />
          <Route path='/doctorotp' element={<OtpInput person='doctor'/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
