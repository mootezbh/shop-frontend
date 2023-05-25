import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
const Home = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
