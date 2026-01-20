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

    productCategory: {
      type: String,
      enum: Object.values(ProductCategory),
      required: true,
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
      enum: Object.values(ProductSize),
      default: ProductSize.NORMAL,
    },

    productUnit: {
      type: String,
      enum: Object.values(ProductUnit),
      default: ProductUnit.PIECE,
    },


    productDesc: {
      type: String,
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

productSchema.index({ productName: 1, ProductSize: 1, ProductUnit: 1 });

export default mongoose.model("Product", productSchema);