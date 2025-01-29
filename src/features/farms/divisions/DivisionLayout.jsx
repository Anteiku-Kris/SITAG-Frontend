import {Outlet} from "react-router";
import { Navbar } from "../../../components/Navbar";
export const DivisionLayout = () => {
    return (
      <>
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </>
    );
  };