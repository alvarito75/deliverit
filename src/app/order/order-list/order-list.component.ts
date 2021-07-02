import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  @Input() orders: Order[];

  // Subject
  private greeting: string = '';
  private ordersSubject: Order[] = [];

  constructor(private dataService: DataService, private router: Router) {
    // Call to update any value subscribed to this page
    this.updatePeople();
    this.updateOrderList();
    console.log('inside Oder list constructor');
  }

  ngOnInit() {
    // Load products from Service.
    this.orders = this.dataService.getOrdersData();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  // Show order info
  showOrderInfo(idOrder) {
    console.log(idOrder);
    this.router.navigate(['/order/' + idOrder]);
  }

  updatePeople() {

    // Get updated state.
    this.dataService.getObservable().subscribe((data) => {
        console.log('Data received', data);
        console.log(data)
        //this.updatePeopleList(data.idPeople);
        //return data.idPeople;
        this.greeting = data;
    });
    
  }

  updateOrderList() {
    this.dataService.getOrderObservable().subscribe((order) => {
      console.log('Order received', order);
      console.log(order)

      console.log('Before', this.ordersSubject);

      // Push Order
      //this.ordersSubject.push(order);
      this.orders.push(order);

      console.log('After', this.ordersSubject);
    });
  }

  goToCreateOrderPage() {
    this.router.navigate(['/create-order']);
  }

}
