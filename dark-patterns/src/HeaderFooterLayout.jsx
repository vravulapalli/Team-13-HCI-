import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const HeaderFooterLayout = () => {

  return (
    <div className="" >
      <Navbar />
        <div className="pt-20 p-4 md:p-6 md:pt-20">
          <Outlet /> {/* Renders the nested routes */}
        </div>
    </div>
  );
};

export default HeaderFooterLayout;
