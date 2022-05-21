import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Geolocation from './pages/Geolocation';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import info from './components/info';
import Regsiter from './pages/Register'
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
          <Route component={Regsiter} path="/register" />
          <Route component={info} path="/info"/>
          <Route component={Geolocation} path="/geolocation"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
