import { ProductInterface } from "./product";

export type ProductDto = Omit<ProductInterface, 'id'>
