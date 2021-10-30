import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageContentsPage from './pages/manage_contents/ManageContentsPage';
import ManageDevicesPage from './pages/manage_devices/ManageDevicesPage';
import HomePage from './pages/homepage/Homepage';
import InfotainmentRoot from './pages/infotainment/Root';
import EditDeviceContentPage from './pages/edit_device_content/EditDeviceContentPage';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import AddContentPage from './pages/add_content_page/AddContentPage';



function App() {
  const engine = new Styletron();

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Switch>
            <Route path="/infotainment/:id">
              <InfotainmentRoot />
            </Route>
            <Route path="/devices/:id/:description">
              <EditDeviceContentPage />
            </Route>
            <Route exact path="/devices">
              <ManageDevicesPage />
            </Route>
            <Route path="/contents">
              <ManageContentsPage />
            </Route>
            <Route path="/createContents/:deviceId/:deviceDescription">
              <AddContentPage />
            </Route>
            <Route exact path="/createContents">
              <AddContentPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </ Switch >
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
