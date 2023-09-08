import {setShowProductModal} from "../stores/productSlice";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const NewProducts = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const productHeaders = [
        'Products',
        'Buying Price',
        'Quantity',
        'Threshold Value',
        'Expiry Date',
       ' In Stock',
        'Condition'
    ]
    const currentDate = new Date()
    currentDate.setMonth(currentDate.getMonth() +1 ).toLocaleString()

    const products = [{
        name: 'Maggi',
        buying_price: 430,
        quantity: 43,
        threshold_value: 12,
        expiry_date: new Date('2023-02-01'),
        availability: 79,
        condition:new Date() > new Date('2023-02-01') ? 'Expired' : currentDate > new Date('2023-02-01') ? 'About to Expire' : 'Good'
    }, {
        name: 'Bru',
        buying_price: 257,
        quantity: 11,
        threshold_value: 30,
        expiry_date:  new Date('2023-09-23'),
        availability: 44,
        condition:new Date() > new Date('2023-09-23') ? 'Expired' : currentDate > new Date('2023-09-23') ? 'About to Expire' : 'Good'

    }, {
        name: 'Red Bull',
        buying_price: 530,
        quantity: 0,
        threshold_value: 28,
        expiry_date:  new Date('2024-08-22'),
        availability: 53,
        condition:new Date() > new Date('2024-08-22') ? 'Expired' : currentDate > new Date('2024-08-22') ? 'About to Expire' : 'Good'

    },
        {
            name: 'Monster',
            buying_price: 530,
            quantity: 0,
            threshold_value: 20,
            expiry_date:  new Date('2023-11-23'),
            availability: 10,
            condition:new Date() > new Date('2023-11-23') ? 'Expired' : currentDate > new Date('2023-11-23') ? 'About to Expire' : 'Good'

        }]
    return (<div className='card'>
        <div className='flex flex-row justify-between items-center w-full relative'>
            <h2 className='text-xl font-bold'>Products</h2>
            <div className='flex gap-x-4'>
                <button onClick={() => {
                    dispatch(setShowProductModal(true))
                }} type='button' className='button'>Add Product</button>
                <button className='clearButton '>Filter</button>
                <button className='clearButton '>Download All</button>
            </div>
        </div>

            <table className="table-auto w-full text-sm text-left text-slate-900">
                <thead className="text-base font-light text-gray-500 capitalize">
                <tr>
                    {
                        productHeaders.map((header,index:number)=>{
                            return (
                                <th key={index} scope="col" className="px-6 py-3">{header}</th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {products.map((product: any, index: number) => {
                    return (<tr key={index}  className="bg-white border-t hover:bg-gray-50"
                    >
                            <td className="px-6 py-4">{product.name}</td>
                            <td className="px-6 py-4" >{product.buying_price}</td>
                            <td className="px-6 py-4" >{product.quantity}</td>
                            <td className="px-6 py-4" >{product.threshold_value}</td>
                            <td className="px-6 py-4" >{product.expiry_date.toLocaleString().split(',')[0]}</td>
                            <td className="px-6 py-4" >
                                <div className={`w - full bg-gray-100 rounded-full h-1.5 ${product.availability >= 75 ? 'bg-green-200/50' : product.availability >= 50 ? 'bg-blue-200/50' : product.availability >= 25 ? 'bg-orange-200/50' : 'bg-red-200/50'}`}>
                                    <div className={`h-full relative rounded-full ${product.availability >= 75 ? 'bg-green-600' : product.availability >= 50 ? 'bg-blue-600' : product.availability >= 25 ? 'bg-orange-400' : 'bg-red-600'}`}
                                    style={{width:`${product.availability}%`}}
                                    ></div>
                                </div>
                            </td>
                        <td className={`px-6 py-4`} >
                            <span className={`p-2 rounded-full ${ product.condition === 'Good' ? 'bg-green-50 border border-green-600 text-green-600': product.condition === 'Expired' ? 'bg-red-50  border border-red-600 text-red-600' :'bg-orange-50  border border-orange-600 text-orange-600'}`}>
                                {product.condition}
                            </span>
                            </td>
                        </tr>)
                })}

                </tbody>
            </table>
        </div>)
}

export default NewProducts
