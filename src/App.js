import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import AddCar from './Pages/AddCar';
import ProtectedRoute from './hoc/ProtectedRoute';
import LoginPage from './Pages/LoginPage';
import EditCarPage from './Pages/EditCarPage';
import CarsPage from './Pages/CarsPage';

function App() {
  return (
    <div>
      <Routes>
            <Route element={<ProtectedRoute />}>
                <Route 
                    path='/' 
                    element={<Navigate to='/dashboard' element={<Dashboard />} />} 
                />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/cars' element={<CarsPage />} />
                <Route path='/add-car' element={<AddCar />} />
                <Route path='/edit-car/:id' element={<EditCarPage />} />
            </Route>
            <Route path="/admin-login" element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;