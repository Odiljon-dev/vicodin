import mongoose, { Schema } from "mongoose";
import { ProductCategory, ProductStatus, ProductUnit } from "../libs/enums/product.enum";
import { ProductSize } from "../libs/enums/product.enum";

const productSchema = new Schema(
{

  productStatus: {
    type: String,
    enum: Object.values(ProductStatus),
    default: ProductStatus.INACTIVE,
  },

  productName: {
    type: String,
    required: true,
  },

  productPrice: {
    type: Number,
    required: true,
    min: 0,
  },

  productLeftCount: {
    type: Number,
    required: true,
    min: 0,
  },

   productSize: {
    type: String,
    enum: ProductSize,
  default: ProductSize.NORMAL
  },

  productUnit: {
    type: String,
    enum: Object.values(ProductUnit),
    default: ProductUnit.PIECE,
  },

  productCategory: {
    type: String,
    enum: Object.values(ProductCategory),
    required: true,
  },

  productDesc: {
    type: String,
    required: true,
  },

  productImages: {
    type: [String],
    default: [],
  },

  productViews: {
    type: Number,
    default: 0,
  },
 },

    { timestamps: true } // updatedAt, createdAt
);

productSchema.index({productName: 1, ProductSize: 1, ProductUnit: 1});

export default mongoose.model("Product", productSchema);