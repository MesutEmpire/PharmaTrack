import { RouterProvider } from "react-router-dom";
import router from "./router/Route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "./stores/userAuthSlice";

function App() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
