import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/utils/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.Service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import memberController from "./member.controller";
import { ProductCategory } from "../libs/enums/product.enum";

const productService = new ProductService();
const productController: T = {};

/** SPA */
productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");

    const { page, limit, order, productCategory, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCategory) {
      inquiry.productCategory = productCategory as ProductCategory;
    }
    if (search) inquiry.search = String(search);

    const result = await productService.getProducts(inquiry);

    // Disable caching to prevent 304 responses
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");

    const { id } = req.params;
    const memberId = req.member?._id ?? null;
    const productId = Array.isArray(id) ? id[0] : String(id);
    const result = await productService.getProduct(memberId, productId);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/* SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");

    const data = await productService.getAllProducts();

    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      const path = ele.path.replace(/\\/g, "/");
      const uploadsIndex = path.indexOf("uploads");
      return uploadsIndex >= 0 ? "/" + path.substring(uploadsIndex) : path;
    });

    await productService.createNewProduct(data);
    res.send(
      `<script> alert("Sucessful cretaion!"); window.location.replace('/admin/product/all') </script>`
    );

    console.log("data:", data);
  } catch (err) {
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    console.log("Error, createNewProduct:", err);
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all') </script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = Array.isArray(req.params.id) ? req.params.id[0] : String(req.params.id);

    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
