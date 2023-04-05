import { useSelector } from "react-redux";
import { selectProduct,selectExpiredProducts,selectLowInventoryProducts } from "../stores/productSlice";
import { selectOrder } from "../stores/orderSlice";
import { selectSales } from "../stores/saleSlice";
import { selectSupplier } from "../stores/supplierSlice";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Profits Per Month in 2023 ',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];




const Dashboard = () => {
  const { products } = useSelector(selectProduct);
  const { orders } = useSelector(selectOrder);
  const { sales } = useSelector(selectSales);
  const { suppliers } = useSelector(selectSupplier);
  const {expiredProducts} = useSelector(selectExpiredProducts);
  const {lowInventoryProducts} = useSelector(selectLowInventoryProducts);
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
    {
      name: "Expiring Products",
      id: 4,
      length: expiredProducts.length,
      color: "yellow",
    },
    {
      name: "Low Inventory",
      id: 5,
      length: lowInventoryProducts.length,
      color: "pink",
    },
  ];

  const months =  [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const salesByMonth = months.map((month, index) => {
    const salesForMonth = sales.filter(sale => {
      const date = new Date(sale.sale_date);
      return date.getMonth() === index;
    });
    return {
      month: month,
      sales: salesForMonth.length > 0 ? salesForMonth : [{ sale_date: null, profit: 0 }]
    };
  });

  const monthlyProfits = salesByMonth.map(({ sales }) => {
    const profits = sales.reduce((total, sale) => {
      return total + sale.profit_margin;
    }, 0);
    return profits.toFixed(2);
  });


  const data = {
  labels:months,
  datasets: [
    {
      label: 'Profits per Month',
      data: monthlyProfits,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
  };

  return (
      <div className=' min-h-screen pt-5 min-w-screen'>
    <div className="flex items-start justify-center">
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
                  : data.color === "yellow"
                  ? "bg-yellow-500"
                  : data.color === "pink"
                  ? "bg-pink-700"
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
  <div className='w-full mt-12'>
    <Line options={options} data={data} />
  </div>
  </div>
  );
};

export default Dashboard;
