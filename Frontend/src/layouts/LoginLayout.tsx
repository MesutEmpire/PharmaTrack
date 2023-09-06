import {Outlet} from "react-router-dom";

const LoginLayout = () => {
    return (
        <div className="layout layoutWidth">
            <Outlet />
        </div>
    );
};

export default LoginLayout;
