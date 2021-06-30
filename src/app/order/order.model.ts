import { Product } from "../product/product.model";

export class Order{
  idOrder: string;
  orderName: string;
  imageUrl: string;
  products: Product[];

  constructor(idOrder: string, orderName: string, imageUrl: string, products: Product[]) {
    this.idOrder = idOrder;
    this.orderName = orderName;
    this.imageUrl = imageUrl;
    this.products = products;
  }

}