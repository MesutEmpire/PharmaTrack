// import ErrorComponent from "./ErrorComponent";
// import { useSelector } from "react-redux";
// import { selectSupplier, setSearchedSupplier } from "../stores/supplierSlice";
// import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";
// import IconAddSupplier from "../icons/IconAddSupplier";
// const Suppliers = () => {
//   const { suppliers, error } = useSelector(selectSupplier);
//
//   return (
//     <div>
//       <h2>Suppliers</h2>
//       <div className="flex justify-between items-center mr-12">
//         <SearchBar name={"Suppliers"} search={setSearchedSupplier} />
//         <Link to="/admin/suppliers/addNewSupplier">
//           <IconAddSupplier />
//         </Link>
//       </div>
//       {error ? (
//         <ErrorComponent fetchError={error} />
//       ) : (
//         <div>
//           {suppliers.length !== 0 && (
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                     <th scope="col" className="px-6 py-3">
//                       Supplier ID
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Name
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Phone Number
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Email
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {suppliers.map((supplier: any, id: number) => {
//                     return (
//                       <tr
//                         key={id}
//                         className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                       >
//                         <th
//                           scope="row"
//                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                         >
//                           {supplier.supplier_id}
//                         </th>
//                         <td className="px-6 py-4">{supplier.supplier_name}</td>
//                         <td className="px-6 py-4">{supplier.phone_number}</td>
//                         <td className="px-6 py-4">{supplier.email}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default Suppliers;
import { useDispatch } from "react-redux";
import { setShowProductModal } from "../stores/productSlice";
import { Link } from "react-router-dom";
import { setShowSupplierModal } from "../stores/supplierSlice";

const Suppliers = () => {
  const dispatch = useDispatch();

  const supplierHeaders = [
    "Supplier Name",
    "Product",
    "Phone Number",
    "Email",
    "Type",
    "On The Way",
  ];
  const suppliersData = [
    {
      name: "Richard Martin",
      product: "Kit Kat",
      phone_number: "7687764556",
      type: "Taking Return",
      onTheWay: "13",
      email: "richard@gmail.com",
    },
    {
      name: "Tom Homan",
      product: "Maaza",
      phone_number: "9867545368",
      type: "Taking Return",
      onTheWay: "-",
      email: "tomhoman@gmail.com",
    },
    {
      name: "Veandir",
      product: "Dairy Milk",
      phone_number: "9867545566",
      type: "Not Taking Return",
      onTheWay: "-",
      email: "veandier@gmail.com",
    },
    {
      name: "Charin",
      product: "Tomato",
      phone_number: "9267545457",
      type: "Taking Return",
      onTheWay: "12",
      email: "charin@gmail.com",
    },
    {
      name: "Hoffman",
      product: "Milk Bikis",
      phone_number: "9367546531",
      type: "Taking Return",
      onTheWay: "-",
      email: "hoffman@gmail.com",
    },
    {
      name: "Fainden Juke",
      product: "Marie Gold",
      phone_number: "9667545982",
      type: "Not Taking Return",
      onTheWay: "9",
      email: "fainden@gmail.com",
    },
    {
      name: "Martin",
      product: "Saffola",
      phone_number: "9867545457",
      type: "Taking Return",
      onTheWay: "-",
      email: "martin@gmail.com",
    },
    {
      name: "Joe Nike",
      product: "Good day",
      phone_number: "9567545769",
      type: "Taking Return",
      onTheWay: "-",
      email: "joenike@gmail.com",
    },
    {
      name: "Dender Luke",
      product: "Apple",
      phone_number: "9667545980",
      type: "Taking Return",
      onTheWay: "-",
      email: "dender@gmail.com",
    },
  ];

  return (
    <div className="card">
      <div className="flex flex-row justify-between items-center w-full relative">
        <h2 className="text-xl font-bold">Suppliers</h2>
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              dispatch(setShowSupplierModal(true));
            }}
            type="button"
            className="button"
          >
            Add Supplier
          </button>
          <button className="clearButton ">Filter</button>
          <button className="clearButton ">Download All</button>
        </div>
      </div>

      <table className="table-auto w-full text-sm text-left text-slate-900">
        <thead className="text-base font-light text-gray-500 capitalize">
          <tr>
            {supplierHeaders.map((header, index: number) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {suppliersData.map((supplier: any, index: number) => {
            return (
              <tr key={index} className="bg-white border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link to={`${index}/`}>{supplier.name}</Link>
                </td>
                <td className="px-6 py-4">{supplier.product}</td>
                <td className="px-6 py-4">{supplier.phone_number}</td>
                <td className="px-6 py-4">{supplier.email}</td>
                <td
                  className={`px-6 py-4 ${
                    supplier.type === "Taking Return"
                      ? "text-green-600"
                      : "text-red-600"
                  } `}
                >
                  {supplier.type}
                </td>
                <td className="px-6 py-4">{supplier.onTheWay}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
