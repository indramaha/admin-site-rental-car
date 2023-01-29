import ChartShow from "../Components/Chart";
import SideBar from "../Components/SideBar";


const Dashboard = () => {
    return (
        <SideBar dashboard={true} car={false}>
            <ChartShow />
        </SideBar>
    );
}

export default Dashboard;