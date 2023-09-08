import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import {selectCurrentUser, selectShowDropdown} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { fetchData } from "../utils/data";
import {Outlet} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Logout from "../components/Logout";
import Dropdown from "../components/Dropdown";
import {selectShowProductModal} from "../stores/productSlice";
const AdminLayout = () => {
    const { pharmacy_id } = useSelector(selectCurrentUser);
    const showDropdown = useSelector(selectShowDropdown)
    const showProductModal = useSelector((selectShowProductModal))
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const productLoader = () => {
        fetchData.map((storeData: any) => {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/${storeData.tag}/${pharmacy_id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
                .then(async (res: any) => {
                    if (res.status !== 200) {
                        const data = await res.json();
                        if (res.status == 401) {
                            throw Error(data);
                        }
                        throw Error(data);
                    }
                    return res.json();
                })
                .then((data: any) => {
                    dispatch(storeData.store(data));
                })
                .catch((error: any) => {
                    dispatch(storeData.error(error.message));
                });
        });
    };
    useEffect(() => {
        if(pharmacy_id)  productLoader();
    }, [pharmacy_id]);

    return (
        <div className={`flex flex-col flex-initial layout`}>
            <Navbar layout='panel'/>
            <div className='flex flex-row w-full relative'>
                { showDropdown && <Dropdown/>}
                <div className='basis-2/12 flex-initial min-h-screen border-r border-slate-300 bg-white py-2'>
                    <Sidebar  />
                </div>
                <div className=' flex flex-col gap-y-2 basis-10/12 bg-slate-100' >
                    <Breadcrumbs/>
                    <div className='p-3'>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminLayout;
