import ErrorComponent from "./ErrorComponent";
import { useSelector } from "react-redux";
import { selectOrder, setSearchedOrder } from "../stores/orderSlice";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import IconAddOrder from "../icons/IconAddOrder";
const Orders = () => {
  const { orders, error } = useSelector(selectOrder);

  return (
    <div>
      <h2>Order</h2>
      <div className="flex justify-between items-center mr-12">
        <SearchBar name={"Order"} search={setSearchedOrder} />
        <Link to={"/"}>
          <IconAddOrder />
        </Link>
      </div>
      {error ? (
        <ErrorComponent fetchError={error} />
      ) : (
        <div>
          {orders.length !== 0 && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Supplier
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Order Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Expected Delivery Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actual Delivery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order: any, id: number) => {
                    return (
                      <tr
                        key={id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {order.purchaseOrder_id}
                        </th>
                        <td className="px-6 py-4">{order.product_name}</td>
                        <td className="px-6 py-4">{order.supplier_name}</td>
                        <td className="px-6 py-4">{order.order_quantity}</td>
                        <td className="px-6 py-4">
                          {new Date(order.order_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {}
                          {new Date(order.expected_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {}
                          {new Date(
                            order.actualDelivery_date
                          ).toLocaleDateString()}
                        </td>
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
  );
};

export default Orders;
