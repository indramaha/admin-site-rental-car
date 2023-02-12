import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './hoc/ProtectedRoute';
import LoginPage from './Pages/LoginPage';
import EditCarPage from './Pages/EditCarPage';
import CarsPage from './Pages/CarsPage';
import AddCarPage from './Pages/AddCarPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
              <Route element={<ProtectedRoute />}>
                  <Route 
                      path='/' 
                      element={<Navigate to='/dashboard' element={<Dashboard />} />} 
                  />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/cars' element={<CarsPage />} />
                  <Route path='/add-car' element={<AddCarPage />} />
                  <Route path='/edit-car/:id' element={<EditCarPage />} />
              </Route>
              <Route path="/admin-login" element={<LoginPage />} />
          </Routes>
      </div>
    </Provider>
    
  );
}

export default App;