import SideBar from "../Components/SideBar";
import EditCar from "../Components/EditCar";

const EditCarPage = () => {
    return (
        <SideBar dashboard={false} car={true}>
            <EditCar />
        </SideBar>
    );
}
 
export default EditCarPage;