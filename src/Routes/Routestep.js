import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Cars from '../Pages/Cars';
import AddCar from '../Pages/AddCar';
import EditCar from '../Pages/EditCar';

const Routestep = () => {
    return (  
        <Routes>
            <Route 
                path='/' 
                element={<Navigate to='/dashboard' element={<Dashboard />} />} 
            />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/add-car' element={<AddCar />} />
            <Route path='/edit-car' element={<EditCar />} />
        </Routes>
    );
}
 
export default Routestep;