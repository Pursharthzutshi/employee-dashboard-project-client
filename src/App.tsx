import './App.css';
import LeftSidebar from '../src/components/LeftSidebar/LeftSidebar';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Register/Login';
import Signup from './components/Register/Signup';
import EmployeesTaskManager from './components/Dashboard/EmployeesTaskManager';


function App() {
  return (
    <div className="App">

        <LeftSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<EmployeesTaskManager />} />

        {/* <Route path="/products" element={} /> */}

        {/* //Login Sign up */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/signup">signup</Link>

    </div>
  );
}

export default App;
