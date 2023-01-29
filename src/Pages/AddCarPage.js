import AddCar from "../Components/AddCar";
import SideBar from "../Components/SideBar";

const AddCarPage = () => {
    return (  
        <SideBar dashboard={false} car={true}>
            <AddCar />
        </SideBar>
        
    );
}
 
export default AddCarPage;