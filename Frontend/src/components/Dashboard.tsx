import { useSelector } from "react-redux";
import { selectProduct } from "../stores/productSlice";
import { selectOrder } from "../stores/orderSlice";
import { selectSales } from "../stores/saleSlice";
import { selectSupplier } from "../stores/supplierSlice";

const Dashboard = () => {
  const { products } = useSelector(selectProduct);
  const { orders } = useSelector(selectOrder);
  const { sales } = useSelector(selectSales);
  const { suppliers } = useSelector(selectSupplier);
  const datas = [
    {
      name: "Products",
      id: 0,
      length: products.length,
      color: "red",
    },
    {
      name: "Orders",
      id: 1,
      length: orders.length,
      color: "orange",
    },
    {
      name: "Sales",
      id: 2,
      length: sales.length,
      color: "blue",
    },
    {
      name: "Suppliers",
      id: 3,
      length: suppliers.length,
      color: "green",
    },
  ];

  return (
    <div className="flex items-start justify-center min-h-screen pt-5 min-w-screen">
      {datas.map((data: any, key: number) => {
        return (
          <div
            key={key}
            className="flex items-center overflow-hidden rounded-lg border border-gray-200 shadow-md h-16 w-64 mx-5 "
          >
            <div
              className={`h-full w-1/3 flex items-center justify-center ${
                data.color === "red"
                  ? "bg-red-700"
                  : data.color === "blue"
                  ? "bg-blue-700"
                  : data.color === "orange"
                  ? "bg-orange-700"
                  : data.color === "green"
                  ? "bg-emerald-700"
                  : "bg-gray-700"
              }`}
            >
              <h4 className="text-2xl font-mono text-white">
                {data.name.slice(0, 3)}
              </h4>
            </div>
            <div className="w-2/3 pl-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                {data.length}
              </h4>
              <div className="text-gray-900">{data.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
