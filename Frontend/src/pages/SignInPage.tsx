import {Outlet} from "react-router-dom";
import Login from "../components/Login";

const SignInPage = () => {
    return (
        <div className="layout layoutWidth">
            <Login/>
            <Outlet />
        </div>
    );
};

export default SignInPage;
