import { createBrowserRouter, redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorComponent from "../components/ErrorComponent";
import Dashboard from "../components/Dashboard";
import Product from "../components/Product";
import Suppliers from "../components/Suppliers";
import Sales from "../components/Sales";
import Users from "../components/Users";
import LandingLayout from "../layouts/LandingLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddSupplier from "../components/AddSupplier";
import SupplierLayout from "../layouts/SupplierLayout";
import AddProduct from "../components/AddProduct";
import ProductLayout from "../layouts/ProductLayout";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import NewHomeLayout from "../layouts/NewHomeLayout";
import HomePage from "../pages/Home";
import LoginLayout from "../layouts/LoginLayout";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import InventoryProduct from "../pages/InventoryProduct";
import ProductDetails from "../components/ProductDetails";
import SuppliersPage from "../pages/SuppliersPage";
import PurchasesPage from "../pages/PurchasesPage";
import SalesPage from "../pages/SalesPage";
import InvoicePage from "../pages/InvoicePage";
import UsersPage from "../pages/Users";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LandingLayout />,
  //   errorElement: <ErrorComponent />,
  // },
  {
    path: "/",
    element: <NewHomeLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/sign_in",
    element: <SignInPage />,
    loader: () => {
      if (localStorage.getItem("currentUser")) {
        return redirect("/admin/");
      } else {
        return null;
      }
    },
  },
  {
    path: "/sign_up",
    element: <SignUpPage />,
    loader: () => {
      if (localStorage.getItem("currentUser")) {
        return redirect("/admin/");
      } else {
        return null;
      }
    },
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    loader: () => {
      if (localStorage.getItem("currentUser")) {
        return localStorage.getItem("currentUser");
      } else {
        return redirect("/sign_in");
      }
    },
    children: [
      {
        index: true,
        element: <DashboardPage />,
        handle: {
          crumb: () => "Dashboard",
        },
      },
      {
        path: "inventory",
        element: <InventoryPage />,
        handle: {
          crumb: () => "Inventory",
        },
      },
      {
        path: "inventory/:id",
        element: <InventoryProduct />,
        handle: {
          crumb: () => "Inventory Product",
        },
        children: [
          {
            index: true,
            element: <ProductDetails />,
          },
          {
            path: "purchase",
            element: <ProductDetails />,
          },
          {
            path: "adjustment",
            element: <ProductDetails />,
          },
          {
            path: "history",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "products",
        element: <ProductLayout />,
        handle: {
          crumb: () => "Products",
        },
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: "addNewProduct",
            element: <AddProduct />,
            handle: {
              crumb: () => "Add New Product",
            },
          },
        ],
      },
      {
        path: "suppliers",
        element: <SuppliersPage />,
        handle: {
          crumb: () => "Suppliers",
        },
      },
      {
        path: "purchases",
        element: <PurchasesPage />,
        handle: {
          crumb: () => "Purchases",
        },
      },
      {
        path: "sales",
        element: <SalesPage />,
        handle: {
          crumb: () => "Sales",
        },
      },
      {
        path: "invoice",
        element: <InvoicePage />,
        handle: {
          crumb: () => "Invoices",
        },
      },
      {
        path: "users",
        element: <UsersPage />,
        handle: {
          crumb: () => "Users",
        },
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorComponent />,
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset_password/:data_id",
    element: <ResetPassword />,
  },
  // {
  //   path: "/admin",
  //   element: <HomeLayout />,
  //   loader: () => {
  //     if (localStorage.getItem("currentUser")) {
  //       return localStorage.getItem("currentUser");
  //     } else {
  //       return redirect("/login");
  //     }
  //   },
  //   // element: localStorage.getItem('currentUser') ? <HomeLayout/>:<Navigate to={'/login'}/>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "/admin/products",
  //       element: <ProductLayout />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Product />,
  //         },
  //         {
  //           path: "/admin/products/addNewProduct",
  //           element: <AddProduct />,
  //         },
  //       ],
  //     },
  //     {
  //       path: "/admin/suppliers",
  //       element: <SupplierLayout />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Suppliers />,
  //         },
  //         {
  //           path: "/admin/suppliers/addNewSupplier",
  //           element: <AddSupplier />,
  //         },
  //       ],
  //     },
  //     {
  //       path: "/admin/orders",
  //       element: <Orders />,
  //     },
  //     {
  //       path: "/admin/sales",
  //       element: <Sales />,
  //     },
  //     {
  //       path: "/admin/users",
  //       element: <Users />,
  //     },
  //   ],
  // },
]);

export default router;
