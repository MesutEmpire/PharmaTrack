import {FormEvent} from "react";
import {selectEditProduct, setProductsForm} from "../stores/productSlice";
import {useSelector} from "react-redux";

const ProductDetails = ()=>{
    const editProduct = useSelector(selectEditProduct)
    const currentDate = new Date()
    currentDate.setMonth(currentDate.getMonth() +1 ).toLocaleString()
    const productData = {
        name: 'Maggi',
        category:'Pharmaceuticals',
        buying_price: 430,
        unit:22,
        quantity: 43,
        threshold_value: 12,
        expiry_date: '2023-02-01',
        availability: 79,
        condition: new Date() > new Date('2023-02-01') ? 'Expired' : currentDate > new Date('2023-02-01') ? 'About to Expire' : 'Good'
    }
    console.log(editProduct)
    return (
            <form className="flex flex-col gap-y-6 w-full max-w-md relative" action="#">
                <div className='flex flex-row items-center w-full relative gap-x-4'>
                    <label htmlFor="product_name" className="modal_label">Product
                        Name</label>
                    { !editProduct && <span>{productData.name}</span>}
                    <input type="text" name="product_name" id="product_name"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg px-2 py-3 basis-1/5"
                           placeholder="Enter product name" value={productData.name} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_category"
                           className="modal_label">Category</label>
                    { !editProduct && <span>{productData.category}</span>}
                    <input type="text" name="product_category" id="product_category"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter product category" value={productData.category} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_buying_price" className="modal_label">Buying
                        Price</label>
                    { !editProduct && <span>{productData.buying_price}</span>}
                    <input type="text" name="product_buying_price" id="product_buying_price"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter buying price" value={productData.buying_price} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_quantity"
                           className="modal_label">Quantity</label>
                    { !editProduct && <span>{productData.quantity}</span>}
                    <input type="text" name="product_quantity" id="product_quantity"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter product quantity" value={productData.quantity} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_unit" className="modal_label">Unit</label>
                    { !editProduct && <span>{productData.unit}</span>}
                    <input type="text" name="product_unit" id="product_name"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter product unit" value={productData.unit} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_expiry_date" className="modal_label">Expiry
                        Date</label>
                    { !editProduct && <span>{productData.expiry_date}</span>}
                    <input type="date" name="product_expiry_date" id="product_expiry_date"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter expiry date" value={productData.expiry_date} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <label htmlFor="product_threshold_value" className="modal_label">Threshold
                        Value</label>
                    { !editProduct && <span>{productData.threshold_value}</span>}
                    <input type="text" name="product_threshold_value" id="product_threshold_value"
                           className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-1/5"
                           placeholder="Enter threshold value" value={productData.threshold_value} hidden={!editProduct} required/>
                </div>
                <div className='flex flex-row justify-end gap-x-4'>
                    <button className='clearButton' type='button'>Discard</button>
                    <button type='submit' className='button'>Add Product</button>
                </div>
            </form>

    )
}
export default ProductDetails