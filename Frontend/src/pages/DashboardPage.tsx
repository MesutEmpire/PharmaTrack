import SalesOverview from "../components/SalesOverview";
import PurchaseOverview from "../components/PurchaseOverview";
import InventorySummary from "../components/InventorySummary";
import ProductDetails from "../components/ProductDetails";
import UsersSummary from "../components/UsersSummary";
import LineChart from "../components/LineChart";
import {useSelector} from "react-redux";
import {selectSales} from "../stores/saleSlice";


const DashboardPage = () => {
    const {sales} = useSelector(selectSales);
    const test = [{
        "sale_id": 4006,
        "product_id": 2001,
        "sale_date": "2022-03-23T21:00:00.000Z",
        "sale_quantity": 7,
        "selling_price": 10,
        "profit_margin": 35,
        "product_name": "Paracetamol",
        "product_description": "Pain reliever",
        "cost_price": 5,
        "quantity": 43,
        "expiry_date": "2023-06-29T21:00:00.000Z",
        "restocking_date": "2023-04-29T21:00:00.000Z",
        "supplier_id": 1001,
        "pharmacy_id": 6001
    }, {
        "sale_id": 4008,
        "product_id": 2004,
        "sale_date": "2022-05-27T21:00:00.000Z",
        "sale_quantity": 1,
        "selling_price": 100,
        "profit_margin": 100,
        "product_name": "Simvastatin",
        "product_description": "Cholesterol-lowering medication",
        "cost_price": 20,
        "quantity": 9,
        "expiry_date": "2023-11-29T21:00:00.000Z",
        "restocking_date": "2023-08-29T21:00:00.000Z",
        "supplier_id": 1003,
        "pharmacy_id": 6001
    }, {
        "sale_id": 4008,
        "product_id": 2004,
        "sale_date": "2022-01-27T21:00:00.000Z",
        "sale_quantity": 1,
        "selling_price": 500,
        "profit_margin": 50,
        "product_name": "Simvastatin",
        "product_description": "Cholesterol-lowering medication",
        "cost_price": 20,
        "quantity": 9,
        "expiry_date": "2023-11-29T21:00:00.000Z",
        "restocking_date": "2023-08-29T21:00:00.000Z",
        "supplier_id": 1003,
        "pharmacy_id": 6001
    },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-11-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 30,
            "profit_margin": 30,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-12-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 20,
            "profit_margin": 2,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-02-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 20,
            "profit_margin": 40,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-04-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 20,
            "profit_margin": 30,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-06-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 20,
            "profit_margin": 44,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-10-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 10,
            "profit_margin": 66,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        }
        , {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-07-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 50,
            "profit_margin": 50,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-09-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 210,
            "profit_margin": 23,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        },
        {
            "sale_id": 4008,
            "product_id": 2004,
            "sale_date": "2022-08-27T21:00:00.000Z",
            "sale_quantity": 1,
            "selling_price": 40,
            "profit_margin": 54,
            "product_name": "Simvastatin",
            "product_description": "Cholesterol-lowering medication",
            "cost_price": 20,
            "quantity": 9,
            "expiry_date": "2023-11-29T21:00:00.000Z",
            "restocking_date": "2023-08-29T21:00:00.000Z",
            "supplier_id": 1003,
            "pharmacy_id": 6001
        }
        ]
    return (<div className='w-full relative'>
        <div className='flex flex-col gap-y-5'>
            <div className=' flex flex-initial flex-col md:flex-row gap-5'>
                <SalesOverview/>
                <PurchaseOverview/>
            </div>
            <div className=' flex flex-initial flex-col md:flex-row gap-5'>
                <InventorySummary/>
                <ProductDetails/>
                <UsersSummary/>
            </div>
            <LineChart sales={test}/>
        </div>
    </div>);
};

export default DashboardPage;
