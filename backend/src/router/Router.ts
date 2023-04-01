const {
  addData,
  getSaleData,
  updateData,
  deleteData,
  getUserData,
  getProductData,
  getPurchaseOrderData,
  getLowInventoryData,
  getSupplierData,
  getExpiringProductData,
  getAddSuppliers,
} = require("../controller/productController");
const {
  login,
  sign_up,
  logOutUser,
  authUser,
  authAdmin,
} = require("../controller/userAuthController");
const { requireUserAuth, requireAdminAuth } = require("../middleware/jwtAuth");

const { Router } = require("express");

const router = Router();

router.post("/userAuth/login", login);
router.post("/userAuth/sign_up", sign_up);
router.get("/userAuth/logout", logOutUser);
router.get("/sale/:pharmacy", requireUserAuth, getSaleData);
router.get("/user/:pharmacy", requireUserAuth, getUserData);
router.get("/product/:pharmacy", requireUserAuth, getProductData);
router.get("/purchaseOrder/:pharmacy", requireUserAuth, getPurchaseOrderData);
router.get("/supplier/:pharmacy", requireUserAuth, getSupplierData);
router.get(
  "/expiring_product/:pharmacy",
  requireUserAuth,
  getExpiringProductData
);
router.get("/low_product/:pharmacy", requireUserAuth, getLowInventoryData);
router.get("/addSupplier/:pharmacy", requireUserAuth, getAddSuppliers);
router.post("/data", requireUserAuth, addData);
router.patch("/data", requireAdminAuth, updateData);
router.delete("/data", requireAdminAuth, deleteData);
router.get("/authUser", requireUserAuth, authUser);
router.get("/authAdmin", requireAdminAuth, authAdmin);

module.exports = router;
