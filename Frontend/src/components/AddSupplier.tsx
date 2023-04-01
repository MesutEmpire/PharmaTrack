import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import {useDispatch, useSelector} from "react-redux";
import {
    selectSupplierFormData,
    setErrorPostSupplier,
    setSuppliersForm,
    selectErrorSupplierPost
} from "../stores/supplierSlice";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

const AddSupplier = ()=>{
    const errorPost = useSelector(selectErrorSupplierPost)
    const supplierData = useSelector(selectSupplierFormData)
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const navigate = useNavigate()
     const postLoginData = (event: FormEvent) => {
        event.preventDefault();
        console.log(supplierData)
        fetch(
            "http://localhost:3210/api/data",
            {
                method:'POST',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    table_name:"supplier",
                    data:supplierData
                })
            }
        )
            .then(async (res:any)=>{
                if(res.status !== 200) {
                    const data = await res.json()
                    if (res.status == 401) {
                        throw Error(data)
                    }
                    throw Error(data)
                }
                return res.json()

            })
            .then(()=> {
                return navigate('/admin/suppliers')
            })
            .catch((error:any)=>{
                dispatch(setErrorPostSupplier(error.message))
            })
    };

    return(
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="text-center">
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <div className="flex justify-center items-center  bg-white p-8 lg:p-16">
                            <div className="grid  p-4">
                                <div
                                    className=" rounded-lg border border-gray-200 shadow-md p-3 sm:p-8 lg:p-12"
                                >
                                    <div className="my-7 mb-9">
                                        <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">
                                            New Supplier
                                        </p>
                                    </div>

                                    <form    onSubmit={(event: FormEvent) => postLoginData(event)}
                                             onChange={(event: any) =>
                                                 dispatch(setSuppliersForm({ [event.target.name]: event.target.value }))
                                             } >

                                        <div className="relative mb-6">
                                            <input
                                                type="text"
                                                id="supplier_name"
                                                name="supplier_name"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="supplier_name"
                                                   className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Name</label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="email"
                                                   className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Email Address</label>
                                        </div>

                                        <div className="relative mb-6">
                                            <input
                                                type="tel"
                                                id='phone_number'
                                                name="phone_number"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="phone_number"
                                                className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Phone Number</label
                                            >
                                        </div>

                                        <button
                                            type="submit"
                                            className="button px-32 my-2"
                                        >
                                            Add
                                        </button>

                                    </form>
                                    <ErrorComponent fetchError={errorPost}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddSupplier