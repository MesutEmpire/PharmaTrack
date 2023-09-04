import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const NewHomeLayout = () => {
    return (
        <div className="flex flex-col gap-y-6 w-full">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default NewHomeLayout;
