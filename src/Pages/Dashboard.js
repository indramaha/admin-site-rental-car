import SideBar from "../Components/SideBar";


const Dashboard = () => {
    return (
        <SideBar dashboard={true} car={false}>
            <div>
                <h1>Dashboard</h1>
            </div>
        </SideBar>
    );
}

export default Dashboard;