import { Product } from "../product/product.model";

export class Order{
  idOrder: number;
  orderName: string;
  imageUrl: string;
  products: Product[];

  constructor(idOrder: number, orderName: string, imageUrl: string, products: Product[]) {
    this.idOrder = idOrder;
    this.orderName = orderName;
    this.imageUrl = imageUrl;
    this.products = products;
  }

}