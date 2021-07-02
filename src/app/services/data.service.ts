import { Injectable } from '@angular/core';

// Model for Order
import { Order } from '../order/order.model';

// Model for Product
import { Product } from '../product/product.model';

// Model for User
import { User } from '../home/user.model';

// Import rxjs
import { Subject }  from 'rxjs';

// Import HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Product list
  private products: Product[] = [
    new Product('1', 'Leche', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', 8),
    new Product('2', 'Toddy', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', 9),
    new Product('3', 'Cafe', 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg', 12),
  ];

  // Order list
  private orders: Order[] = [
    new Order(1, 'Tienda Calatayud', 'https://icon-library.com/images/store-icon-vector/store-icon-vector-5.jpg', this.products),
    new Order(2, 'Tienda La Pampa', 'https://icon-library.com/images/store-icon-vector/store-icon-vector-5.jpg', this.products),
    new Order(3, 'Tienda Cala Cala', 'https://icon-library.com/images/store-icon-vector/store-icon-vector-5.jpg', this.products),
  ];

  // Subject
  private fooSubject = new Subject<string>();
  private ordersSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

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
  getOrder(idOrder: number) {
    return this.orders.find( order => order.idOrder === idOrder);
  }

  // Update Subject
  publishSomeData(data: string) {
    this.fooSubject.next(data);
  }
  getObservable(): Subject<string> {
    return this.fooSubject;
  }

  publishOrderData(order: any) {
    console.log('Publishing order data...');
    console.log(order);
    this.ordersSubject.next(order);
  }
  getOrderObservable(): Subject<any> {
    return this.ordersSubject;
  }

  // Add an Order
  createOrder(idOrder: number, orderName: string, imageUrl: string, products: Product[]): Order {

    //registerStore
    this.registerStore();


    console.log(idOrder);
    console.log(orderName);
    console.log(imageUrl);
    console.log(products);

    // Create the new order
    const newOrder = new Order(idOrder, orderName, imageUrl, products);

    return newOrder;


    // Add to an aux array.
  }

  // Register user
  registerUser() {
    console.log('register user');

    const newUser = new User('Alvaross', 'Mamani', 'test@test.com', '123456789');

    // TODO: Send the values to Realtime Firebase
    //this.httpClient.post('https://claseapp-aba0b-default-rtdb.firebaseio.com/person.json', {...newPerson, idPeople:null}).subscribe();
    // Firebase URL 'https://deliverit-f7233-default-rtdb.firebaseio.com/'

    //this.http.post('https://deliverit-f7233-default-rtdb.firebaseio.com/', {...newUser, idPeople:null}).subscribe();
    const users = this.http.post('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json', {...newUser}).subscribe();

    // Another test
    //this.http.post<User>('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json', newUser).subscribe();

    // Get users
    const usersFirebase = this.http.get('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json').subscribe();

    console.log(usersFirebase);

    console.log(users);
  }

  // Register user
  registerProduct() {
    console.log('register product');

    const newProduct = new Product('789', 'Galletas Ferrari', 'test@test.com', 10);

    // TODO: Send the values to Realtime Firebase
    this.http.post('https://deliverit-f7233-default-rtdb.firebaseio.com/products.json', {...newProduct}).subscribe();

    // Another post test
    this.http.post<Product>('https://deliverit-f7233-default-rtdb.firebaseio.com/products.json', newProduct).subscribe();

    // Get users
    //const usersFirebase = this.http.get('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json').subscribe();

  }

    // Register user
    registerStore() {
      console.log('register store');
  
      const newOrder = new Order(789, 'La Cancha', 'image.url', []);
  
      // TODO: Send the values to Realtime Firebase
      //const users = this.http.post('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json', {...newUser}).subscribe();
  
      // Another post test
      this.http.post<Order>('https://deliverit-f7233-default-rtdb.firebaseio.com/stores.json', newOrder).subscribe();
  
      // Get users
      //const usersFirebase = this.http.get('https://deliverit-f7233-default-rtdb.firebaseio.com/users.json').subscribe();
  
    }
}
