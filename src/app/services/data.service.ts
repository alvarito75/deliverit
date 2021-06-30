import { Injectable } from '@angular/core';

// Model for Order
import { Order } from '../order/order.model';

// Model for Product
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Product list
  private products: Product[] = [
    new Product('1', 'Leche', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg'),
    new Product('2', 'Toddy', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg'),
    new Product('3', 'Cafe', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg'),
  ];

  // Order list
  private orders: Order[] = [
    new Order('1', 'Pedido Calatayud', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', this.products),
    new Order('2', 'Pedido La Pampa', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', this.products),
    new Order('3', 'Pedido Cala Cala', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', this.products),
  ];

  constructor() { }

  // Get products data
  getProductsData() {
    //return this.people;
    return [...this.products];
  }

  // Get a single product
  getProduct(idProduct: string) {
    return this.products.find( product => product.idProduct === idProduct);
  }

  // Get orders data
  getOrdersData() {
    return [...this.orders];
  }

  // Get a single product
  getOrder(idOrder: string) {
    return this.orders.find( order => order.idOrder === idOrder);
  }
}
