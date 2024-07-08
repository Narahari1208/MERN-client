import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './components/Register';
import Navbar from './components/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);
