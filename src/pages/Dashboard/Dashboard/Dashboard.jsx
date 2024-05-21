import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
