import {logoutCurrentUser} from "../stores/userAuthSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/userAuth/logout`)
            .then(async (res: any) => {
                if (res.status !== 200) {
                    const data = await res.json();
                    if (res.status == 401) {
                        throw Error(data);
                    }
                    throw Error(data);
                }
                return dispatch(logoutCurrentUser());
            })
            .then(() => {
                return navigate("/");
            })
            .catch((err: any) => {
                console.log(err.message);
            });
    };
    return (<div>
        <div
            className="w-full mt-2 origin-top-right rounded-md shadow-lg max-w-auto"
        >
            <ul>
                <li
                    onClick={() => logout()}
                    className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer z-auto "
                >
                        <span className="flex items-center justify-center text-lg text-red-400">
            <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
            >
              <path
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
                    <span className="ml-3">Logout</span>
                </li>
            </ul>
        </div>
    </div>)
}

export default Logout