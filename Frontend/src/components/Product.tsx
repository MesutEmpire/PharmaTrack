import ErrorComponent from "./ErrorComponent";
import { useSelector } from "react-redux";
import { selectProduct, setSearchedProduct } from "../stores/productSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import IconAddProduct from "../icons/IconAddProduct";

const Product = () => {
  const { products, error } = useSelector(selectProduct);
  return (
    <div>
      <h2>Products</h2>
      <div className="flex justify-between items-center mr-12">
        <SearchBar name={"Products"} search={setSearchedProduct} />
        <Link to="/admin/products/addNewProduct">
          <IconAddProduct />
        </Link>
      </div>
      {error ? (
        <ErrorComponent fetchError={error} />
      ) : (
        <div>
          {products.length !== 0 && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cost Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Selling Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Expiry Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Restocking Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Supplier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: any, id: number) => {
                    return (
                      <tr
                        key={id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.product_id}
                        </th>
                        <td className="px-6 py-4">{product.product_name}</td>
                        <td className="px-6 py-4">
                          {product.product_description}
                        </td>
                        <td className="px-6 py-4">{product.cost_price}</td>
                        <td className="px-6 py-4">{product.selling_price}</td>
                        <td className="px-6 py-4">{product.quantity}</td>
                        <td className="px-6 py-4">
                          {}
                          {new Date(product.expiry_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(
                            product.restocking_date
                          ).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">{product.supplier_name}</td>
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

export default Product;
