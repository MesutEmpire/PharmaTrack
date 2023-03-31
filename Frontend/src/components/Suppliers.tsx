import { useState } from "react";
// import { IOwner } from "../intetfaces/Interfaces";
import ErrorComponent from "./ErrorComponent";
import { useSelector, useDispatch } from "react-redux";
import { selectSupplier, setSearchedSupplier } from "../stores/supplierSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import SearchBar from "./SearchBar";
import {setSearchedUser} from "../stores/userSlice";
const Suppliers = ()=>{
    const { suppliers, error } = useSelector(selectSupplier);
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    return (
            <div>
                <h2>Suppliers</h2>
                <SearchBar name={'Suppliers'} search={setSearchedSupplier}/>
                {error ? (
                    <ErrorComponent fetchError={error} />
                ) : (
                    <div>
                        {suppliers.length !== 0 && (
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Supplier ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                           Email
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {suppliers.map((supplier: any, id: number) => {
                                        return (
                                            <tr
                                                key={id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {supplier.supplier_id}
                                                </th>
                                                <td className="px-6 py-4">{supplier.supplier_name}</td>
                                                <td className="px-6 py-4">{supplier.phone_number}</td>
                                                <td className="px-6 py-4">{supplier.email}</td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
    )
}

export default Suppliers