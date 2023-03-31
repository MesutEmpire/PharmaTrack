// import { IOwner } from "../intetfaces/Interfaces";
import ErrorComponent from "./ErrorComponent";
import { useSelector,useDispatch} from "react-redux";
import {selectUser,setSearchedUser} from "../stores/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import SearchBar from "./SearchBar";
const Users = ()=>{
const {users,error} = useSelector(selectUser)
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();


    return (
            <div>
                <h2>Users</h2>
                <SearchBar name={'Users'} search={setSearchedUser}/>
                {error ? (
                    <ErrorComponent fetchError={error} />
                ) : (
                    <div>
                        {users.length !== 0 && (
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            User ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Username
                                        </th>
                                        {/*<th scope="col" className="px-6 py-3">*/}
                                        {/*    Password*/}
                                        {/*</th>*/}
                                        <th scope="col" className="px-6 py-3">
                                            Permissions
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user: any, id: number) => {
                                        return (
                                            <tr
                                                key={id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {user.user_id}
                                                </th>
                                                <td className="px-6 py-4">{user.username}</td>
                                                {/*<td className="px-6 py-4">{user.password}</td>*/}
                                                <td className="px-6 py-4">{user.permissions}</td>
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

export default Users