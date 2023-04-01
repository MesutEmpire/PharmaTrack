
import ErrorComponent from "./ErrorComponent";
import { useSelector } from "react-redux";
import { selectSales } from "../stores/saleSlice";
import SearchBar from "./SearchBar";
const Sales = ()=>{
    const { sales, error } = useSelector(selectSales);

          return (
            <div>
                <h2>Sales</h2>
                <SearchBar name={'Sales'}/>
                {error ? (
                    <ErrorComponent fetchError={error} />
                ) : (
                    <div>
                        {sales.length !== 0 && (
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Sale ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sales Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Quantity Sold
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Selling Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Profit
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sales.map((sale: any, id: number) => {
                                        return (
                                            <tr
                                                key={id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {sale.sale_id}
                                                </th>
                                                <td className="px-6 py-4">{sale.product_name}</td>
                                                <td className="px-6 py-4">
                                                    {new Date(sale.sale_date).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4">{sale.sale_quantity}</td>
                                                <td className="px-6 py-4">{sale.selling_price}</td>
                                                <td className="px-6 py-4">{sale.profit_margin}</td>
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

export default Sales