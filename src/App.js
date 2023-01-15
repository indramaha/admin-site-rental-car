import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Cars from './Pages/Cars';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import ProtectedRoute from './hoc/ProtectedRoute';
import Login from './Pages/Login';

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
                <Route path='/cars' element={<Cars />} />
                <Route path='/add-car' element={<AddCar />} />
                <Route path='/edit-car/:id' element={<EditCar />} />
            </Route>
            <Route path="/admin-login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;