import {Outlet} from "react-router-dom";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
    return (
        <div className="layout layoutWidth">
            <SignUp/>
            <Outlet />
        </div>
    );
};

export default SignUpPage;
