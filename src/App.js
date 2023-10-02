import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './pages/MainRoutes';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { LoginPageContext } from './Context/LoginPageContextProvider';

function App() {
  const {isLoginPageVisibaleVisible} = useContext(LoginPageContext);
  
  return (
    <div className="App">
      <Navbar />
      {isLoginPageVisibaleVisible && <Login/>}
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
