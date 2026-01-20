import express from "express";
const routerAdmin = express.Router();
import sellerController from "./controllers/seller.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** SELLER **/
routerAdmin.get("/", sellerController.goHome);
routerAdmin
  .get("/login", sellerController.getLogin)
  .post("/login", sellerController.processLogin);
routerAdmin
  .get("/signup", sellerController.getSignup)
  .post("/signup", makeUploader("members").single("memberImage"), sellerController.processSignup);
routerAdmin.get("/logout", sellerController.logout);
routerAdmin.get("/check-me", sellerController.checkAuthSession);

/** Product **/

routerAdmin.get("/product/all", sellerController.verifySeller, productController.getAllProducts);
routerAdmin.post("/product/create", sellerController.verifySeller,
  //  uploadProductImage.single("productImage"), 
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct);
routerAdmin.post("/product/:id", sellerController.verifySeller, productController.updateChosenProduct);
/** User **/

export default routerAdmin;
