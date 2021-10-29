import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageContentsPage from './pages/manage_contents/ManageContentsPage';
import ManageDevicesPage from './pages/manage_devices/ManageDevicesPage';
import HomePage from './pages/homepage/Homepage';
import InfotainmentRoot from './pages/infotainment/Root';
import EditDeviceContentPage from './pages/edit_device_content/EditDeviceContentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/infotainment/:id">
          <InfotainmentRoot />
        </Route>
        <Route path="/devices/:id">
          <EditDeviceContentPage />
        </Route>
        <Route exact path="/devices">
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
