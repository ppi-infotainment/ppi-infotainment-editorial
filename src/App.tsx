import './App.css';
import HomePage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/infotainment">Hi</Route>
      <Route path="/"><HomePage /></Route>
    </Router>
  );
}

export default App;
