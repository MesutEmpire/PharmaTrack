import { useSelector } from "react-redux";
import AddSupplier from "../components/AddSupplier";
import Suppliers from "../components/Suppliers";
import { selectShowSupplierModal } from "../stores/supplierSlice";

const SuppliersPage = () => {
    const showSupplierModal = useSelector(selectShowSupplierModal)
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <Suppliers />
      {showSupplierModal && <AddSupplier />}
    </div>
  );
};

export default SuppliersPage;
