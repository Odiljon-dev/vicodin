import express from "express";
const routerAdmin = express.Router();
import sellerController from "./controllers/seller.controller";

routerAdmin.get("/", sellerController.goHome);

routerAdmin.get("/login", sellerController.getLogin);

routerAdmin.get("/signup", sellerController.getSignup);

export default routerAdmin;
