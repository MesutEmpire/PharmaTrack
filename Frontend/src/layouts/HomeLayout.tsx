import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { fetchData } from "../utils/data";
import {useNavigate} from "react-router-dom"
const HomeLayout = () => {
  const { pharmacy_id } = useSelector(selectCurrentUser);
const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate()
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

  // useEffect(()=>{
  //   if(Object.keys(currentUser).length === 0) {
  //     navigate('/')
  //   }
  // },[currentUser])

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default HomeLayout;
