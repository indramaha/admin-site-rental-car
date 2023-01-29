import ChartShow from "../Components/Chart";
import SideBar from "../Components/SideBar";


const Dashboard = () => {
    return (
        <SideBar dashboard={true} car={false}>
            <div>
                <ChartShow />
            </div>
        </SideBar>
    );
}

export default Dashboard;