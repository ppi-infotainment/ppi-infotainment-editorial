import './App.css';
import HomePage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageContentsPage from './pages/manage_contents/ManageContentsPage';
import ManageDevicesPage from './pages/manage_devices/ManageDevicesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/infotainment">Hi</Route>
        <Route path="/devices">
          <ManageDevicesPage />
        </Route>
        <Route path="/contents">
          <ManageContentsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </ Switch >
    </Router>
  );
}

export default App;
