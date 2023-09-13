// import { FormEvent, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ErrorComponent from "./ErrorComponent";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setProductsForm,
//   selectErrorProduct,
//   setErrorPostProduct,
//   selectProductFormData,
// } from "../stores/productSlice";
// import {
//   selectSupplierAddProduct,
//   setAddSuppplierProduct,
//   setErrorPostSupplier,
// } from "../stores/supplierSlice";
// import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
//
// const AddProduct = () => {
//   const {errorPost} = useSelector(selectErrorProduct);
//   const productData = useSelector(selectProductFormData);
//   const suppliers = useSelector(selectSupplierAddProduct);
//   const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     getAddSuppliers();
//   }, []);
//   const getAddSuppliers = () => {
//     const { pharmacy_id } = JSON.parse(localStorage.getItem("currentUser") as any);
//     fetch(`${import.meta.env.VITE_BACKEND_URL}/addSupplier/${pharmacy_id}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//     })
//       .then(async (res: any) => {
//         if (res.status !== 200) {
//           const data = await res.json();
//           if (res.status == 401) {
//             throw Error(data);
//           }
//           throw Error(data);
//         }
//         return res.json();
//       })
//       .then((data: any) => {
//         dispatch(setAddSuppplierProduct(data));
//       })
//       .catch((error: any) => {
//         dispatch(setErrorPostSupplier(error.message));
//       });
//   };
//   const postLoginData = (event: FormEvent) => {
//     event.preventDefault();
//     fetch(`${import.meta.env.VITE_BACKEND_URL}/data`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({
//         table_name: "product",
//         data: productData,
//       }),
//     })
//       .then(async (res: any) => {
//         if (res.status !== 200) {
//           const data = await res.json();
//           if (res.status == 401) {
//             throw Error(data);
//           }
//           throw Error(data);
//         }
//         return res.json();
//       })
//       .then(() => {
//         return navigate("/admin/products");
//       })
//       .catch((error: any) => {
//         dispatch(setErrorPostProduct(error.message));
//       });
//   };
//   return (
//     <div className="bg-white">
//       <div className="relative isolate px-6 pt-6 lg:px-8">
//         <div className="text-center">
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <div className="flex justify-center items-center  bg-white">
//               <div className="grid">
//                 <div className=" rounded-lg border border-gray-200 shadow-md p-3 sm:p-8 lg:p-12">
//                   <div className="my-7 mb-9">
//                     <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">
//                       New Product
//                     </p>
//                   </div>
//
//                   <form
//                     onSubmit={(event: FormEvent) => postLoginData(event)}
//                     onChange={(event: any) =>
//                       dispatch(
//                         setProductsForm({
//                           [event.target.name]: event.target.value,
//                         })
//                       )
//                     }
//                   >
//                     <div className="relative mb-6">
//                       <input
//                         type="text"
//                         id="product_name"
//                         name="product_name"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="product_name"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Name
//                       </label>
//                     </div>
//                     <div className="relative mb-6">
//                       <input
//                         type="number"
//                         id="cost_price"
//                         name="cost_price"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="cost_price"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Cost Price
//                       </label>
//                     </div>
//
//                     <div className="relative mb-6">
//                       <input
//                         type="number"
//                         id="selling_price"
//                         name="selling_price"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="selling_price"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Selling Price
//                       </label>
//                     </div>
//                     <div className="relative mb-6">
//                       <input
//                         type="date"
//                         id="expiry_date"
//                         name="expiry_date"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="expiry_date"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Expiry Date
//                       </label>
//                     </div>
//                     <div className="relative mb-6">
//                       <input
//                         type="date"
//                         id="restocking_date"
//                         name="restocking_date"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="restocking_date"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Restocking Date
//                       </label>
//                     </div>
//
//                     <div className="relative mb-6">
//                       <input
//                         type="number"
//                         id="quantity"
//                         name="quantity"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       />
//                       <label
//                         htmlFor="quantity"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Quantity
//                       </label>
//                     </div>
//                     <div className="relative mb-6">
//                       <select
//                         id="supplier_id"
//                         name="supplier_id"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       >
//                         {suppliers.map((supplier: any, key: number) => {
//                           return (
//                             <option
//                               key={key}
//                               value={supplier.supplier_id}
//                               className="input_design"
//                             >
//                               {supplier.supplier_name}
//                             </option>
//                           );
//                         })}
//                       </select>
//                       <label
//                         htmlFor="supplier_id"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Supplier
//                       </label>
//                     </div>
//                     <div className="relative mb-6">
//                       <textarea
//                         id="product_description"
//                         name="product_description"
//                         className="input_design peer"
//                         placeholder=" "
//                         required
//                       ></textarea>
//                       <label
//                         htmlFor="product_description"
//                         className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                       >
//                         Description
//                       </label>
//                     </div>
//
//                     <button type="submit" className="button px-32 my-2">
//                       Add
//                     </button>
//                   </form>
//                   <ErrorComponent fetchError={errorPost} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddProduct;


import IconClose from "../icons/IconClose";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setProductsForm,
    setErrorPostProduct,
    selectProductFormData, setShowProductModal,
} from "../stores/productSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";


const AddProduct = () => {
  const productData = useSelector(selectProductFormData);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const postProductData = (event: FormEvent) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        table_name: "product",
        data: productData,
      }),
    })
      .then(async (res: any) => {
        if (res.status !== 200) {
          const data = await res.json();
          if (res.status == 401) {
            throw Error(data);
          }
          throw Error(data);
        }
        return res.json();
      })
      .then(() => {
        return navigate("/admin/products");
      })
      .catch((error: any) => {
        dispatch(setErrorPostProduct(error.message));
      });
  };

    return (<div className='card min-w-[30rem] absolute top-3.5 left-[40%] z-50 shadow-lg'>
            <div className='flex flex-row justify-between w-full relative'>
                <h3 className='text-lg font-semibold'>New Product</h3>
                <button onClick={() => {
                    dispatch(setShowProductModal(false))
                }}>
                    <IconClose/>
                </button>

            </div>
                <form  onSubmit={(event: FormEvent) => postProductData(event)}
                            onChange={(event: any) =>
                              dispatch(
                                setProductsForm({
                                  [event.target.name]: event.target.value,
                                })
                              )
                            } className="flex flex-col gap-y-6 w-full relative" action="#">
                    <div className='flex flex-row items-center w-full relative gap-x-4'>
                        <label htmlFor="product_name" className="modal_label ">Product
                            Name</label>
                        <input type="text" name="product_name" id="product_name"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg px-2 py-3 basis-2/3"
                               placeholder="Enter product name" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_category"
                               className="modal_label">Category</label>
                        <input type="text" name="product_category" id="product_category"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter product category" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_buying_price" className="modal_label ">Buying
                            Price</label>
                        <input type="text" name="product_buying_price" id="product_buying_price"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter buying price" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_quantity"
                               className="modal_label ">Quantity</label>
                        <input type="text" name="product_quantity" id="product_quantity"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter product quantity" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_unit" className="modal_label">Unit</label>
                        <input type="text" name="product_unit" id="product_name"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter product unit" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_expiry_date" className="modal_label">Expiry
                            Date</label>
                        <input type="text" name="product_expiry_date" id="product_expiry_date"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter expiry date" required/>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <label htmlFor="product_threshold_value" className="modal_label ">Threshold
                            Value</label>
                        <input type="text" name="product_threshold_value" id="product_threshold_value"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2 basis-2/3"
                               placeholder="Enter threshold value" required/>
                    </div>
                    <div className='flex flex-row justify-end gap-x-4'>
                        <button className='clearButton' type='button'>Discard</button>
                        <button type='submit' className='button'>Add Product</button>
                    </div>
                </form>
        </div>

    )
}

export default AddProduct