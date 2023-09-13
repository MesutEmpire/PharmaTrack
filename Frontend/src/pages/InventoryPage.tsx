import OverallInventory from "../components/OverallInventory";
import NewProducts from "../components/NewProducts";
import AddProduct from "../components/AddProduct";
import { useSelector } from "react-redux";
import { selectShowProductModal } from "../stores/productSlice";

const InventoryPage = () => {
  const showProductModal = useSelector(selectShowProductModal);
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <OverallInventory />
      <NewProducts />
      {showProductModal && <AddProduct />}
    </div>
  );
};

export default InventoryPage;
