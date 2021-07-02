import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Dataservice
import { DataService } from '../../services/data.service';

// Order model
import { Order } from '../order.model';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  // Define Create Order form
  formOrder = new FormGroup({
    idOrder: new FormControl(''),
    orderName: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }


  // Create an Order
  addOrder() {
    console.log('Creating the order...');

    // Get last id.
    const orderListData = this.dataService.getOrdersData();
    console.log(orderListData[orderListData.length-1]);
    console.log(orderListData);

    // Call the proper function to add the Order
    const newOrder = this.dataService.createOrder(
      this.formOrder.value.idOrder, 
      this.formOrder.value.orderName,
      'https://media.tycsports.com/files/2021/06/24/298396/copa-america_416x234.jpg',
      []
    );


    // Fire the subscriber
    this.dataService.publishOrderData(newOrder);

    // Redirect to /order
    this.router.navigate(['/order']);

  }

}
