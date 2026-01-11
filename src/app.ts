import express from "express";
import path from "path";
import router from "./router";

/** 1-ENTRAMCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** SESSIONS**/

/** VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** ROUTERS **/
app.use("/", router);  // Middleware Design pattern

export default app;
