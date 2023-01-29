import Cars from "../Components/Cars";
import SideBar from "../Components/SideBar";

const CarsPage = () => {
    return (
        <SideBar dashboard={false} car={true}>
            <Cars />
        </SideBar>
    );
}

export default CarsPage;