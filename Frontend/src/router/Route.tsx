import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorComponent from "../components/ErrorComponent";
import Dashboard from "../components/Dashboard";
import Product from "../components/Product";
import Suppliers from "../components/Suppliers";
import Orders from "../components/Orders";
import Sales from "../components/Sales";
import Users from "../components/Users";
import LandingLayout from "../layouts/LandingLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddSupplier from "../components/AddSupplier";
import SupplierLayout from "../layouts/SupplierLayout";
import AddProduct from "../components/addProduct";
import ProductLayout from "../layouts/ProductLayout";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/login",
    element: <Login />,
    // action:()=>{
    //     return <Navigate to={'/admin'}/>
    // }
  },
  {
    path: "/error",
    element: <ErrorComponent />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />
  },
  {
    path: "/reset_password/:data_id",
    element: <ResetPassword />
  },
  {
    path: "/admin",
    element: <HomeLayout />,
    // element: localStorage.getItem('currentUser') ? <HomeLayout/>:<Navigate to={'/login'}/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: "/admin/products/addNewProduct",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "/admin/suppliers",
        element: <SupplierLayout />,
        children: [
          {
            index: true,
            element: <Suppliers />,
          },
          {
            path: "/admin/suppliers/addNewSupplier",
            element: <AddSupplier />,
          },
        ],
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/sales",
        element: <Sales />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
