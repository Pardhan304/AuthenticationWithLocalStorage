import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import ProtectedRoute from '../Components/ProtectedRoute';
import '../App.css'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
