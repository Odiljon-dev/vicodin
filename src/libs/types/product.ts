import { ObjectId } from "mongoose";
import { ProductCategory, ProductSize, ProductStatus, ProductUnit } from "../enums/product.enum";

export interface Product {
    _id: ObjectId;
    productStatus: ProductStatus;
    productCategory: ProductCategory;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productUnit?: string;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productCategory: ProductCategory;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productUnit?: ProductUnit;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    productStatus?: ProductStatus;
    productCategory?: ProductCategory;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productUnit?: ProductUnit;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}