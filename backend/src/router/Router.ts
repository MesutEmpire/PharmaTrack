const { addData,getData,updateData,deleteData } = require("../controller/productController");
const {login,sign_up,logOutUser,authUser,authAdmin} = require('../controller/userAuthController')
const {requireUserAuth,requireAdminAuth} = require('../middleware/jwtAuth')

const { Router } = require("express");

const router = Router();

router.post("/userAuth/login", login);
router.post("/userAuth/sign_up", sign_up);
router.get('/userAuth/logout',logOutUser)
router.get("/:data",requireUserAuth, getData);
router.post("/data",requireUserAuth, addData);
router.patch("/data",requireAdminAuth ,updateData);
router.delete("/data",requireAdminAuth, deleteData);
router.get('/authUser',requireUserAuth,authUser)
router.get('/authAdmin',requireAdminAuth,authAdmin)

module.exports = router;
