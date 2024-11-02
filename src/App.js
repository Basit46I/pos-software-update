import { useState } from 'react';
import './App.css';
import Login from './component/Login';
import Sidebar from './component/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Alert from './component/Alert';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  return (
    <div>
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Sidebar showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;